from plone.dexterity.content import Container
from plone.supermodel import model
from portal.governo import _
from zope import schema
from zope.interface import implementer


class IPessoa(model.Schema):
    """Definição de uma Pessoa no governo."""

    cargo = schema.Choice(
        title=_("Cargo"),
        vocabulary="portal.governo.vocabulary.cargos",
        required=False,
    )


@implementer(IPessoa)
class Pessoa(Container):
    """Uma pessoa da equipe do governo."""
