import React, { FunctionComponent } from 'react';

import { StyledItemList } from './StyledItemList';

interface IItemListProps {
}

export const ItemList: FunctionComponent<IItemListProps> = () => {
  return (
    <StyledItemList>
      item list
    </StyledItemList>
  );
}

ItemList.defaultProps = {
}

ItemList.propTypes = {
};

