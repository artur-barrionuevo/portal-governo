import React from 'react';
import PropTypes from 'prop-types';
import { Icon, UniversalLink } from '@plone/volto/components';
import { Card } from 'semantic-ui-react';
import personSVG from '@plone/volto/icons/user.svg';

const GestorCard = ({ content }) => {
  const img = content.image_scales?.image;
  const scale = img ? img[0]?.scales?.preview : null;
  return (
    <Card key={content.UID} className={'gestor'}>
      {img ? (
        <img
          src={`${content['@id']}/${scale.download}`}
          alt={`Foto de ${content.title}`}
          className={'portrait listitem'}
        />
      ) : (
        <Icon name={personSVG} size="64px" className={'portrait listitem'} />
      )}
      <Card.Content>
        <Card.Header>
          <UniversalLink href={content['@id']} className={'nome'}>
            {content.title}
          </UniversalLink>
        </Card.Header>
        <Card.Description>{content.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
GestorCard.propTypes = {
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

export default GestorCard;
