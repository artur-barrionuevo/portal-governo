from plone.autoform import directives
from plone.dexterity.content import Container
from plone.supermodel import model
from z3c.relationfield.schema import RelationChoice
from zope.interface import implementer


class ISecretaria(model.Schema):
    """Definição de uma Secretaria de governo."""

    gestor = RelationChoice(
        title="Gestor(a)",
        description="Pessoa gestora dessa secretaria",
        vocabulary="portal.governo.vocabulary.gestores",
        required=False,
    )
    directives.widget(
        "gestor",
        frontendOptions={
            "widget": "select",
        },
    )


@implementer(ISecretaria)
class Secretaria(Container):
    """Uma secretaria de governo."""
