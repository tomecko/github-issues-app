import React, { FunctionComponent, Validator } from 'react';
import { arrayOf, object, string } from 'prop-types';

import { IItem } from '../../../model/Item';

import {
  StyledHeading,
  StyledItemGroup,
  StyledItemList,
} from './styled';

interface IItemGroupProps {
  heading: string;
  items: IItem[];
}

export const ItemGroup: FunctionComponent<IItemGroupProps> = props => {
  const { heading, items } = props;
  return (
    <StyledItemGroup>
      <StyledHeading>{heading}</StyledHeading>
      {items.length > 0 ? (
        <StyledItemList>
          {items.map((item, i) => (
            <li key={i}>{item.name} {item.favourite ? 'F' : 'NF'}</li>
          ))}
        </StyledItemList>
      ) : null}
    </StyledItemGroup>
  );
}

ItemGroup.defaultProps = {
};

ItemGroup.propTypes = {
  heading: string.isRequired,
  items: arrayOf(object).isRequired as Validator<IItem[]>,
};

