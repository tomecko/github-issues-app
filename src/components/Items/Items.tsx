import React, { FunctionComponent } from 'react';

import { ItemFilters } from './ItemFilters';
import { ItemList } from './ItemList';

import { StyledItems } from './StyledItems';

interface IItemsProps {
}

export const Items: FunctionComponent<IItemsProps> = () => {
  return (
    <StyledItems>
      <ItemFilters />
      <ItemList />
    </StyledItems>
  );
}

Items.defaultProps = {
}

Items.propTypes = {
};

