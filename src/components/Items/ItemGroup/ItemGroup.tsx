import React, { FunctionComponent, Validator } from 'react';
import { arrayOf, object, string, func } from 'prop-types';

import { IconStar } from '../../Icons';
import { IItem } from '../model/Item';

import {
  StyledHeading,
  StyledItemGroup,
  StyledItemList,
  StyledItem,
} from './styled';

interface IItemGroupProps {
  heading: string;
  items: IItem[];
  onItemUpdate?: (item: Partial<IItem>) => void;
}

export const ItemGroup: FunctionComponent<IItemGroupProps> = props => {
  const { heading, items, onItemUpdate } = props;
  return (
    <StyledItemGroup>
      <StyledHeading>{heading}</StyledHeading>
      {items.length > 0 ? (
        <StyledItemList>
          {items.map((item, i) => (
            <StyledItem key={i}>
              {item.name}
              <IconStar
                full={item.favourite}
                onClick={() => onItemUpdate
                  ? onItemUpdate({ id: item.id, favourite: !item.favourite })
                  : null}
                title={`click to ${item.favourite ? ' un' : ''}star`}
              />
            </StyledItem>
          ))}
        </StyledItemList>
      ) : 'No items :('}
    </StyledItemGroup>
  );
}

ItemGroup.propTypes = {
  heading: string.isRequired,
  items: arrayOf(object).isRequired as Validator<IItem[]>,
  onItemUpdate: func,
};

