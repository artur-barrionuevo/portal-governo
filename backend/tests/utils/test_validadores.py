from portal.governo.utils import validadores

import pytest


@pytest.mark.parametrize(
    "value,expected",
    [
        ["1@rs.gov.br", True],
        ["foobar@rs.gov.br", True],
        ["bar-foo@rs.gov.br", True],
        ["1@rs.gov.br.br", False],
        ["foobar@rs.gov.br.br", False],
        ["bar-foo@rs.gov.br.br", False],
        ["ericof@simplesconsultoria.com.br", False],
    ],
)
def test_is_valid_email(value, expected):
    """Testa a função is_valid_email."""
    assert validadores.is_valid_email(value) is expected


@pytest.mark.parametrize(
    "value,expected",
    [
        ["51999528312", True],
        ["(51)999528312", False],
        ["5439528312", True],
        ["5132104100", True],
        [" ", False],
        ["(999)1234566", False],
    ],
)
def test_is_valid_telefone(value, expected):
    """Testa a função is_valid_extension."""
    assert validadores.is_valid_telefone(value) is expected
