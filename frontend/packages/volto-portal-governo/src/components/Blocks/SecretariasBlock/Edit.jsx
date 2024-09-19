import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import SecretariasBlockData from './Data';
import SecretariasBlockView from './View';

const SecretariasBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <SecretariasBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <SecretariasBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(SecretariasBlockEdit);
