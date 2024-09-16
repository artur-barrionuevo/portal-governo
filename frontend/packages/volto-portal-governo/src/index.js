// Views
import SecretariaView from './components/Views/SecretariaView';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
  };
  // Views
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    Secretaria: SecretariaView,
  };
  return config;
};

export default applyConfig;
