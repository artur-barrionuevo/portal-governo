import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@plone/components';
import Contato from '../Contato/Contato';
import Endereco from '../Endereco/Endereco';

const Info = (props) => {
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);
  return (
    <Container className={'footer-info'}>
      {navRoot && (
        <>
          <Endereco content={navRoot} />
          <Contato content={navRoot} />
        </>
      )}
    </Container>
  );
};

export default Info;
