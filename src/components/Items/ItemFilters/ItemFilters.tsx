import React, { FunctionComponent, Validator } from 'react';
import { arrayOf, object, func } from 'prop-types';

import { IItem } from '../../../model/Item';

import { StyledItemFilters } from './StyledItemFilters';

interface IItemFiltersProps {
  filter: IFilterInfo;
  filterInfos: IFilterInfo[];
  onSelected: (filter: IFilterInfo) => void;
}

export interface IFilterInfo {
  filterFn: (item: IItem) => boolean;
  name: string;
}

export const ItemFilters: FunctionComponent<IItemFiltersProps> = props => {
  const { filter, filterInfos, onSelected } = props;
  return (
    <StyledItemFilters>
      {filterInfos.map((info, i) => (
        <li
          key={i}
          onClick={() => onSelected(info)}
        >
          {info.name} {filter === info ? '*' : ''}
        </li>
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

