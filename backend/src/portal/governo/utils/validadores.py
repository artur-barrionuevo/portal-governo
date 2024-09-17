import re


def is_valid_email(value: str) -> bool:
    """Validar se o email é @rs.gov.br."""
    pattern = re.compile(r".*@([a-z0-9-]+\.)*rs\.gov\.br$")
    return True if re.match(pattern, value) else False


def is_valid_telefone(value: str) -> bool:
    """Validar se o telefone é válido."""
    pattern = re.compile(r"^(?P<ddd>[1-9]{2})(?P<fone>([2-8]|9[0-9])[0-9]{3}[0-9]{4})$")
    return True if re.match(pattern, value) else False
