from plone.dexterity.content import Container
from plone.schema.email import Email
from plone.supermodel import model
from portal.governo import _
from portal.governo.utils import validadores
from zope import schema
from zope.interface import implementer


class ISecretaria(model.Schema):
    """Definição de uma Secretaria de governo."""

    model.fieldset(
        "contato",
        _("Contato"),
        fields=[
            "email",
            "telefone",
        ],
    )
    email = Email(
        title=_("Email"),
        required=True,
        constraint=validadores.is_valid_email,
    )

    telefone = schema.TextLine(
        title=_("Telefone"),
        description=_("Informe o telefone de contato"),
        required=False,
        constraint=validadores.is_valid_telefone,
    )


@implementer(ISecretaria)
class Secretaria(Container):
    """Uma secretaria de governo."""
