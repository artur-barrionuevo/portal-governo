import React from 'react';
import { Container } from '@plone/components';
import GestorView from './DefaultView';

const View = (props) => {
  const { data, isEditMode, properties } = props;
  const gestor = properties.gestor;
  return gestor ? (
    <GestorView content={gestor} data={data} />
  ) : (
    <Container narrow className={'block gestor empty'}>
      {isEditMode && <span>Por favor selecione um gestor.</span>}
    </Container>
  );
};

export default View;
