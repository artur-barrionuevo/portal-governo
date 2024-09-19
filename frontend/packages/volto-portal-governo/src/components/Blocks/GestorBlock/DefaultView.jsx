import React from 'react';
import { Container } from '@plone/components';
import GestorCard from '../../Gestor/GestorCard';

const GestorView = ({ content }) => {
  return (
    <Container narrow className={`block gestor`}>
      <h2 className="headline">Secretário</h2>
      <GestorCard content={content} />
    </Container>
  );
};

export default GestorView;
