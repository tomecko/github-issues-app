import React, { FunctionComponent, Validator } from 'react';
import { arrayOf, object } from 'prop-types';

import { IItem } from '../../../model/Item';

import { StyledItemGroup } from './StyledItemGroup';
import { StyledItemList } from './StyledItemList';

interface IItemGroupProps {
  items: IItem[];
}

export const ItemGroup: FunctionComponent<IItemGroupProps> = ({ items }) => {
  return (
    <StyledItemGroup>
      {items.length > 0 ? (
        <StyledItemList>
          {items.map(item => (
            <li>{item.name}</li>
          ))}
        </StyledItemList>
      ) : null}
    </StyledItemGroup>
  );
}

ItemGroup.defaultProps = {
};

ItemGroup.propTypes = {
  items: arrayOf(object).isRequired as Validator<IItem[]>,
};

