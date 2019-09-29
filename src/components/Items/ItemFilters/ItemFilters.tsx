import React, { FunctionComponent, Validator } from 'react';
import { arrayOf, object, func } from 'prop-types';

import { IItem } from '../../../model/Item';

import { IFilterInfo, IItemFiltersProps } from './props';
import { StyledCount, StyledItemFilter, StyledItemFilters, StyledName } from './styled';

const getCount = (items: IItem[], filterFn: (item: IItem) => boolean) =>
  items.filter(filterFn).length;

export const ItemFilters: FunctionComponent<IItemFiltersProps> = props => {
  const { filter, filterInfos, items, onSelected } = props;
  return (
    <StyledItemFilters>
      {filterInfos.map((info, i) => (
        <StyledItemFilter
          key={i}
          onClick={() => onSelected(info)}
          selected={info === filter}
        >
          <StyledName>
            {info.name}
          </StyledName>
          {filter === info ? '*' : ''}
          <StyledCount>
            {getCount(items, info.filterFn)}
          </StyledCount>
        </StyledItemFilter>
      ))}
    </StyledItemFilters>
  );
}

ItemFilters.defaultProps = {
};

ItemFilters.propTypes = {
  filter: object.isRequired as Validator<IFilterInfo>,
  filterInfos: arrayOf(object).isRequired as Validator<IFilterInfo[]>,
  onSelected: func.isRequired,
};

