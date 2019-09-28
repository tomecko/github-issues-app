import React, { FunctionComponent, Validator, useState } from 'react';
import { arrayOf, object } from 'prop-types';

import { IItem, ItemStatus } from '../../model/Item';

import { ItemFilters, IFilterInfo } from './ItemFilters';
import { ItemGroup } from './ItemGroup';
import { getItemGroups } from './getItemGroups';

import { StyledItemGroups } from './StyledItemGroups';
import { StyledItems } from './StyledItems';

interface IItemsProps {
  items: IItem[];
}

const filterInfos: IFilterInfo[] = [
  {
    filterFn: () => true,
    name: 'All',
  },
  {
    filterFn: ({ status }: IItem) => status === ItemStatus.Open,
    name: 'Open',
  },
  {
    filterFn: ({ status }: IItem) => status === ItemStatus.Closed,
    name: 'Closed',
  },
];
const defaultFilter = filterInfos[0];

export const Items: FunctionComponent<IItemsProps> = ({ items }) => {
  const [filter, setFilter] = useState<IFilterInfo>(defaultFilter);

  const itemGroups = getItemGroups(items, filter.filterFn, ({ createdAt }) => createdAt);
  return (
    <StyledItems>
      <ItemFilters
        filter={filter}
        filterInfos={filterInfos}
        onSelected={(filter: IFilterInfo) => {
          setFilter(filter);
        }}
      />
      <StyledItemGroups>
        {Object.keys(itemGroups).map(key => (
          <ItemGroup
            key={key}
            heading={key}
            items={itemGroups[key]}
          />
        ))}
      </StyledItemGroups>
    </StyledItems>
  );
}

Items.defaultProps = {
};

Items.propTypes = {
  items: arrayOf(object).isRequired as Validator<IItem[]>,
};

