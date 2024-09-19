import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';
import { UniversalLink } from '@plone/volto/components';

const SecretariaSummary = ({ content }) => {
  const { gestor } = content;
  return (
    <Container className={`secretaria summary`}>
      <h4>
        <UniversalLink item={content}>{content.title}</UniversalLink>
      </h4>
      {gestor && <span>{gestor.title}</span>}
    </Container>
  );
};

const SecretariasView = (props) => {
  const { secretarias, headline, className } = props;
  return (
    <Container narrow className={`block secretarias ${className}`}>
      <h3>{headline}</h3>
      <Container className={`secretarias listing`}>
        {secretarias &&
          secretarias.length > 0 &&
          secretarias.map(function (secretaria, i) {
            return <SecretariaSummary content={secretaria} key={i} />;
          })}
      </Container>
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
