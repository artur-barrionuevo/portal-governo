import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';
import GestorCard from './GestorCard';

const Gestor = ({ content }) => {
  return (
    <Container narrow className={'gestor-wrapper'}>
      <GestorCard content={content} />
    </Container>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Gestor.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image_scales: PropTypes.shape({
      preview: PropTypes.shape({
        download: PropTypes.string,
      }),
    }),
  }),
};

export default Gestor;
