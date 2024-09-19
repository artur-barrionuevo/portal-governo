import React from 'react';
import GestorView from './DefaultView';

const View = (props) => {
  const { properties } = props;
  const gestor = properties.gestor;
  return <GestorView content={gestor} />;
};

export default View;
