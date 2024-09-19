import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';

const SecretariasView = (props) => {
  const { headline, className } = props;
  return (
    <Container narrow className={`block secretarias ${className}`}>
      <h3>{headline}</h3>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SecretariasView.propTypes = {
  headline: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SecretariasView.defaultProps = {
  headline: 'Secretarias',
};

export default SecretariasView;
