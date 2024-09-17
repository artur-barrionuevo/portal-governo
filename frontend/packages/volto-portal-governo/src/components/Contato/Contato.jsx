import React from 'react';
import { Container } from '@plone/components';
import PropTypes from 'prop-types';

const Contato = (props) => {
  const { email, telefone } = props.content;
  return (
    <Container narrow className={'contato'}>
      <Container className="telefone">
        <span>Telefone</span>: <span>{telefone}</span>
      </Container>
      <Container className="email">
        <span>E-mail</span>: <a href={`mailto:${email}`}>{email}</a>
      </Container>
    </Container>
  );
};

Contato.propTypes = {
  content: PropTypes.shape({
    telefone: PropTypes.string,
    endereco: PropTypes.string,
  }).isRequired,
};

export default Contato;
