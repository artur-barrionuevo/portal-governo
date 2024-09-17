import pytest


CONTENT_TYPE = "Plone Site"


class TestPloneSite:
    @pytest.fixture(autouse=True)
    def _setup(self, portal):
        self.portal = portal

    @pytest.mark.parametrize(
        "behavior",
        [
            "portal.governo.behavior.contato",
            "portal.governo.behavior.endereco",
        ],
    )
    def test_has_behavior(self, get_behaviors, behavior):
        assert behavior in get_behaviors(CONTENT_TYPE)
