import React from 'react';
import { Container } from '@plone/components';
import GestorCard from '../../Gestor/GestorCard';

const GestorView = ({ content, data }) => {
  return (
    <Container narrow className={`block gestor`}>
      <h2 className="headline">{data.headline}</h2>
      <GestorCard content={content} />
    </Container>
  );
};

export default GestorView;
