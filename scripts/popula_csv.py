from copy import deepcopy
from pathlib import Path

import csv
import json
import logging
import requests

# Define como faremos o log das ações
logging.basicConfig()
logger = logging.getLogger("portal.goveno.popula_csv")
logger.setLevel(logging.INFO)


# Constantes utilizadas no script
PASTA_ATUAL = Path(__file__).parent.resolve()
PASTA_DADOS = PASTA_ATUAL / "data"
PASTA_TEMPLATES = PASTA_ATUAL / "templates"
BASE_URL="http://localhost:8080/Plone/++api++"
USUARIO="admin"
SENHA="admin"

# Cabeçalhos HTTP
headers = {
    "Accept": "application/json"
}

session = requests.Session()
session.headers.update(headers)

# Autenticar o usuário admin utilizando um Token JWT
login_url = f"{BASE_URL}/@login"
response = session.post(login_url, json={"login": USUARIO, "password": SENHA})
data = response.json()
token = data["token"]
session.headers.update(
    {"Authorization": f"Bearer {token}"}
)

def popula_templates() -> dict:
    suffix = ".json"
    templates = {}
    arquivos = PASTA_TEMPLATES.glob("*.json")
    for arquivo in arquivos:
        tipo = arquivo.name[:-len(suffix)]
        dados = json.loads(arquivo.read_text())
        templates[tipo] = dados
    return templates


dados_csv = []
with open(PASTA_ATUAL / "secretarias_rio_grande_do_sul_completo.csv") as fh:
    reader = csv.DictReader(fh)
    for linha in reader:
        dados_csv.append(linha)

conteudos = {
    "/secretarias": {
        "@type": "Document",
        "id": "secretarias",
        "title": "Secretarias",
        "descricao": "Secretarias do Governo do Estado do Rio Grande do Sul",
    }
}
for item in dados_csv:
    oid = item["Id"]
    caminho = f"/secretarias/{oid}"
    conteudos[caminho] = {
        "@type": "Secretaria",
        "id": oid,
        "title": item["Secretaria"],
        "descricao": "Secretaria do Governo do Estado do Rio Grande do Sul",
        "email": item["E-mail"],
    }
    oid = item["Responsável Id"]
    caminho = f"{caminho}/{oid}"
    conteudos[caminho] = {
        "@type": "Pessoa",
        "id": oid,
        "title": item["Responsável"],
        "email": item["E-mail"],
    }


# Popula os templates por tipo de conteúdo
templates = popula_templates()

# Criar Conteúdos
for path in conteudos:
    data = conteudos[path]
    parent_path = "/".join(path.split("/")[:-1])[1:]
    response = session.get(f"{BASE_URL}/{path}")
    if response.status_code == 404:
        # Identificamos qual o tipo de conteúdo será criado
        tipo = data["@type"]
        # Criamos uma nova varíavel com a cópia dos dados originais
        payload = deepcopy(templates.get(tipo, {}))
        # Aplicamos os dados recebidos de CONTEUDOS
        payload.update(data)
        response = session.post(f"{BASE_URL}/{parent_path}", json=payload)
        if response.status_code > 300:
            logger.error(f"Erro ao criar '{path}': {response.status_code}")
            continue
        else:
            logger.info(f"Conteúdo criado: '{path}'")
    else:
        logger.info(f"Conteúdo existente: '{path}'")

    dados = response.json()
    if dados["review_state"] == "private":
        payload = {
            "comment": "Transição feita na importação"
        }
        response = session.post(f"{BASE_URL}/{path}/@workflow/publish", json=payload)
        if response.status_code > 200:
            logger.error(f"Erro ao transicionar '{path}' para publicado: {response.status_code}")
            continue
        else:
            logger.info(f"Conteúdo publicado: '{path}'")
    else:
        logger.info(f"Conteúdo já publicado: '{path}'")
