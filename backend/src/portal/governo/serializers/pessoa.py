from plone import api
from plone.restapi.interfaces import ISerializeToJson
from plone.restapi.interfaces import ISerializeToJsonSummary
from plone.restapi.serializer.dxcontent import SerializeFolderToJson
from portal.governo.content.pessoa import IPessoa
from portal.governo.interfaces import IBrowserLayer
from zope.component import adapter
from zope.component import getMultiAdapter
from zope.interface import implementer


@implementer(ISerializeToJson)
@adapter(IPessoa, IBrowserLayer)
class PessoaJSONSerializer(SerializeFolderToJson):
    def __call__(self, *args, **kwds) -> dict:
        result = super().__call__(*args, **kwds)
        result["cor"] = "blue"
        result["referencias"] = {}
        for relation in api.relation.get(target=self.context):
            atributo = relation.from_attribute
            fonte = relation.from_object
            if atributo not in result["referencias"]:
                result["referencias"][atributo] = []
            dados = getMultiAdapter((fonte, self.request), ISerializeToJsonSummary)()
            result["referencias"][atributo].append(dados)
        return result
