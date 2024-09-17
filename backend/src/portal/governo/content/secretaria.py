from plone.dexterity.content import Container
from plone.supermodel import model
from zope.interface import implementer


class ISecretaria(model.Schema):
    """Definição de uma Secretaria de governo."""


@implementer(ISecretaria)
class Secretaria(Container):
    """Uma secretaria de governo."""
