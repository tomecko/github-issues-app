import React, { FunctionComponent, Validator } from 'react';
import { arrayOf, object, func } from 'prop-types';

import { IItem } from '../model/Item';

import { IFilterInfo, IItemFiltersProps } from './props';
import {
  StyledCount,
  StyledIcon,
  StyledItemFilter,
  StyledItemFilterAction,
  StyledItemFilters,
  StyledName,
} from './styled';

const getCount = (items: IItem[], filterFn: (item: IItem) => boolean) =>
  items.filter(filterFn).length;

export const ItemFilters: FunctionComponent<IItemFiltersProps> = props => {
  const { filter, filterInfos, items, onSelected } = props;
  return (
    <section>
      <StyledItemFilters>
        {filterInfos.map((info, i) => (
          <StyledItemFilter
            key={i}
            onClick={() => onSelected(info)}
          >
            <StyledItemFilterAction
              selected={info === filter}
            >
              <StyledIcon>
                {info.icon()}
              </StyledIcon>
              <StyledName>
                {info.name}
              </StyledName>
              <StyledCount>
                {getCount(items, info.filterFn)}
              </StyledCount>
            </StyledItemFilterAction>
          </StyledItemFilter>
        ))}
      </StyledItemFilters>
    </section>
  );
}

ItemFilters.propTypes = {
  filter: object.isRequired as Validator<IFilterInfo>,
  filterInfos: arrayOf(object).isRequired as Validator<IFilterInfo[]>,
  items: arrayOf(object) as Validator<IItem[]>,
  onSelected: func.isRequired,
};

