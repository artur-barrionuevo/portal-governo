export const gestorSchema = (props) => {
  return {
    title: 'Bloco do Gestor',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['headline'],
      },
    ],
    properties: {
      headline: {
        title: 'Chamada do bloco',
        default: 'Secretário',
      },
    },
    required: ['headline'],
  };
};
