from plone import api
from plone.restapi.interfaces import ISerializeToJsonSummary
from plone.restapi.services import Service
from zope.component import getMultiAdapter


class SecretariasGet(Service):
    """Lista secretarias do governo."""

    def serializa_como_sumario(self, content) -> dict:
        """Serializa um objeto como dicionário."""
        serializador = getMultiAdapter((content, self.request), ISerializeToJsonSummary)
        return serializador()

    def reply(self) -> dict:
        """Resposta ao endpoint de secretarias."""
        items = []
        # Listar todas as secretarias
        # Serializar cada secretaria como um JSONSummary
        #  - Incluir serializacao do gestor também como JSONSummary
        brains = api.content.find(
            portal_type="Secretaria", sort_on="sortable_title", sort_order="ascending"
        )
        for brain in brains:
            content = brain.getObject()
            item = self.serializa_como_sumario(content)
            item["gestor"] = {}
            rel_gestor = content.gestor
            if rel_gestor:
                gestor = rel_gestor.to_object
                item["gestor"] = self.serializa_como_sumario(gestor)
            items.append(item)
        # Retornar resultado
        return {"@id": f"{self.context.absolute_url()}", "items": items}
