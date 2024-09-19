// Blocos
/// Gestor
import GestorEdit from './components/Blocks/GestorBlock/Edit';
import GestorView from './components/Blocks/GestorBlock/View';
import gestorSVG from '@plone/volto/icons/user.svg';

// Views
import PessoaView from './components/Views/PessoaView';
import SecretariaView from './components/Views/SecretariaView';

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

  config.blocks.blocksConfig.gestorBlock = {
    id: 'gestorBlock',
    title: 'Gestor',
    group: 'common',
    icon: gestorSVG,
    edit: GestorEdit,
    view: GestorView,
  };

  return config;
};

export default applyConfig;
