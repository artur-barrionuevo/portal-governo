from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


OPCOES = [
    ("secretario", "Secretário(a) de Estado"),
    ("servidor", "Servidor público"),
]


@provider(IVocabularyFactory)
def vocab_cargos(context) -> SimpleVocabulary:
    """Cargos da estrutura de governo."""
    terms = []
    for token, title in OPCOES:
        terms.append(SimpleTerm(token, token, title))
    return SimpleVocabulary(terms)
