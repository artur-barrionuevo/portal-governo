from plone import api
from plone.app.vocabularies.catalog import StaticCatalogVocabulary
from portal.governo import PACKAGE_NAME

import pytest


@pytest.fixture
def pessoa_payload() -> dict:
    """Return a payload to create a new pessoa."""
    return {
        "type": "Pessoa",
        "id": "artur-lemos",
        "title": "Artur Lemos",
        "description": (
            "Advogado formado pela Pontifícia Universidade Católica do "
            "Rio Grande do Sul (PUCRS), tem especialização em Direito do Trabalho "
            "e Processual do Trabalho"
        ),
        "email": "gabinete@casacivil.rs.gov.br",
        "telefone": "5132104193",
    }


@pytest.fixture
def secretaria_payload() -> dict:
    """Return a payload to create a new secretaria."""
    return {
        "type": "Secretaria",
        "id": "casacivil",
        "title": "Casa Civil",
        "description": (
            "A Casa Civil do Governo do Estado foi criada em janeiro de 1954,"
            "pelo então governador Ernesto Dornelles"
        ),
        "email": "gabinete@casacivil.rs.gov.br",
        "telefone": "(51) 3210.4193",
    }


@pytest.fixture
def contents(portal, secretaria_payload, pessoa_payload):
    with api.env.adopt_roles(["Manager"]):
        secretaria = api.content.create(container=portal, **secretaria_payload)
        pessoa = api.content.create(container=secretaria, **pessoa_payload)
        return [secretaria, pessoa]


class TestVocabGestores:
    name = f"{PACKAGE_NAME}.vocabulary.gestores"

    @pytest.fixture(autouse=True)
    def _vocab(self, get_vocabulary, contents):
        secretaria, pessoa = contents
        self.vocab = get_vocabulary(self.name, secretaria)

    def test_vocabulary(self):
        assert self.vocab is not None
        assert isinstance(self.vocab, StaticCatalogVocabulary)

    @pytest.mark.parametrize(
        "title",
        [
            "Artur Lemos",
        ],
    )
    def test_results(self, title):
        assert title in [brain.Title for brain in self.vocab.brains]
