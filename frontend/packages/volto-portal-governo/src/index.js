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
  return config;
};

export default applyConfig;
