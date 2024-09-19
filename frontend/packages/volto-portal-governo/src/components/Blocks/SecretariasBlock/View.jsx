import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import SecretariasView from './DefaultView';

const SecretariasBlockView = (props) => {
  const { data, isEditMode, className } = props;
  return (
    <SecretariasView {...data} isEditMode={isEditMode} className={className} />
  );
};

export default withBlockExtensions(SecretariasBlockView);
