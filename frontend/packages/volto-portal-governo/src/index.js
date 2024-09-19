// Blocos
/// Gestor
import GestorEdit from './components/Blocks/GestorBlock/Edit';
import GestorView from './components/Blocks/GestorBlock/View';
import gestorSVG from '@plone/volto/icons/user.svg';

/// Secretarias
import SecretariasBlockEdit from './components/Blocks/SecretariasBlock/Edit';
import SecretariasBlockView from './components/Blocks/SecretariasBlock/View';
import secretariaSVG from '@plone/volto/icons/home.svg';

// Views
import PessoaView from './components/Views/PessoaView';
import SecretariaView from './components/Views/SecretariaView';

// Reducers
import defaultReducers from '@plone/volto/reducers';
import secretarias from './reducers/secretarias/secretarias';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
    contextualVocabularies: ['portal.governo.vocabulary.gestores'],
  };
  // Views
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    Pessoa: PessoaView,
    Secretaria: SecretariaView,
  };

  // Blocos
  /// Grupos de Blocos
  config.blocks.groupBlocksOrder = [
    ...config.blocks.groupBlocksOrder,
    { id: 'procergs', title: 'Procergs' },
  ];
  /// Bloco Gestor
  config.blocks.blocksConfig.gestorBlock = {
    id: 'gestorBlock',
    title: 'Gestor',
    group: 'procergs',
    icon: gestorSVG,
    edit: GestorEdit,
    view: GestorView,
    sidebarTab: 1,
  };
  /// Bloco Secretarias
  config.blocks.blocksConfig.secretariasBlock = {
    id: 'secretariasBlock',
    title: 'Listagem de Secretarias',
    group: 'procergs',
    icon: secretariaSVG,
    edit: SecretariasBlockEdit,
    view: SecretariasBlockView,
    sidebarTab: 1,
  };

  // Reducers
  const localReducers = {
    ...defaultReducers,
    secretarias,
  };
  config.addonReducers = { ...config.addonReducers, ...localReducers };
  return config;
};

export default applyConfig;
