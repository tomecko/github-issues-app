import React, { FunctionComponent, Validator } from 'react';
import { arrayOf, object } from 'prop-types';

import { IItem } from '../../model/Item';

import { ItemFilters } from './ItemFilters';
import { ItemGroup } from './ItemGroup';

import { StyledItems } from './StyledItems';

interface IItemsProps {
  items: IItem[];
}

export const Items: FunctionComponent<IItemsProps> = ({ items }) => {
  return (
    <StyledItems>
      <ItemFilters />
      <ItemGroup items={items} />
    </StyledItems>
  );
}

Items.defaultProps = {
};

Items.propTypes = {
  items: arrayOf(object).isRequired as Validator<IItem[]>,
};

