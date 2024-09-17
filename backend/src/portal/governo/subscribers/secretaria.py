from portal.governo import logger
from portal.governo.content.secretaria import Secretaria
from zope.lifecycleevent import ObjectAddedEvent
from zope.lifecycleevent import ObjectModifiedEvent


ADD_PERMISSION = "portal.governo: Add Secretaria"


def bloqueia_tipo_secretaria(content: Secretaria):
    """Alterar permissão portal.governo: Add Secretaria no objeto secretaria."""
    content.manage_permission(ADD_PERMISSION, [], acquire=False)
    logger.info(f"Remove permissão {ADD_PERMISSION} em {content.absolute_url()}")


def added(content: Secretaria, event: ObjectAddedEvent):
    """Subscriber para quando uma Secretaria é adicionada ao portal."""
    logger.info(f"Adicionada nova secretaria em {content.absolute_url()}")
    bloqueia_tipo_secretaria(content)


def modified(content: Secretaria, event: ObjectModifiedEvent):
    """Subscriber para quando uma Secretaria é alterada no portal."""
    logger.info(f"Modificada secretaria em {content.absolute_url()}")
    bloqueia_tipo_secretaria(content)
