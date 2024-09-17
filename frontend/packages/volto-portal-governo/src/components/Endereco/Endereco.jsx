import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';

const Endereco = (props) => {
  const { endereco, complemento, cidade, estado, cep } = props.content;
  return (
    <Container narrow className={'endereco-wrapper'}>
      {endereco && (
        <Container>
          <span className="endereco">{endereco}</span>
        </Container>
      )}
      {complemento && (
        <Container>
          <span className="complemento">{complemento}</span>
        </Container>
      )}
      <Container>
        <span className="cidade">{cidade}</span>
        {estado && (
          <>
            - <span className="estado">{estado.token}</span>
          </>
        )}
      </Container>
      {cep && (
        <Container>
          <span className="cep">{cep}</span>
        </Container>
      )}
    </Container>
  );
};

Endereco.propTypes = {
  content: PropTypes.shape({
    endereco: PropTypes.string,
    complemento: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    cep: PropTypes.string,
  }).isRequired,
};

export default Endereco;
