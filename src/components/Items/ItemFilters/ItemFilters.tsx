import React, { FunctionComponent } from 'react';

import { StyledItemFilters } from './StyledItemFilters';

interface IItemFiltersProps {
}

export const ItemFilters: FunctionComponent<IItemFiltersProps> = () => {
  return (
    <StyledItemFilters>
      item filters
    </StyledItemFilters>
  );
}

ItemFilters.defaultProps = {
}

ItemFilters.propTypes = {
};

