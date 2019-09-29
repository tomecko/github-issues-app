import React, { FunctionComponent, Validator, useState, ReactNode } from 'react';
import { arrayOf, func, object } from 'prop-types';

import { IItem } from '../../model/Item';

import { ItemFilters, IFilterInfo } from './ItemFilters';
import { ItemGroup } from './ItemGroup';
import { getItemGroups } from './getItemGroups';

import { StyledItemGroups, StyledItems, StyledSidebar, StyledSidebarHeader } from './styled';

interface IItemsProps {
  filterInfos: IFilterInfo[];
  groupBy: (item: IItem) => string;
  groupHeaderFormatter: (key: string) => string;
  items: IItem[];
  onItemUpdate?: (item: Partial<IItem>) => void;
  sidebarHeader?: () => ReactNode;
  sortGroupsBy?: (a: string, b: string) => number;
}

export const Items: FunctionComponent<IItemsProps> = props => {
  const {
    filterInfos,
    groupBy,
    groupHeaderFormatter,
    items,
    onItemUpdate,
    sidebarHeader,
    sortGroupsBy,
  } = props;
  const defaultFilter = filterInfos[0];
  const [filter, setFilter] = useState<IFilterInfo>(defaultFilter);
  const itemGroups = getItemGroups(
    items,
    filter.filterFn,
    groupBy,
  );
  return (
    <StyledItems>
      <StyledSidebar>
        {sidebarHeader
          ? <StyledSidebarHeader>{sidebarHeader()}</StyledSidebarHeader>
          : null}
        <ItemFilters
          filter={filter}
          filterInfos={filterInfos}
          items={items}
          onSelected={(filter: IFilterInfo) => {
            setFilter(filter);
          }}
        />
      </StyledSidebar>
      <StyledItemGroups>
        {Object.keys(itemGroups).sort(sortGroupsBy).map(key => (
          <ItemGroup
            key={key}
            heading={groupHeaderFormatter(key)}
            items={itemGroups[key]}
            onItemUpdate={onItemUpdate}
          />
        ))}
      </StyledItemGroups>
    </StyledItems>
  );
}

Items.defaultProps = {
  sortGroupsBy: (a, b) => a === b
    ? 0
    : a < b ? 1 : -1,
};

Items.propTypes = {
  filterInfos: arrayOf(object).isRequired as Validator<IFilterInfo[]>,
  groupBy: func.isRequired,
  groupHeaderFormatter: func.isRequired,
  items: arrayOf(object).isRequired as Validator<IItem[]>,
  onItemUpdate: func,
  sortGroupsBy: func,
};

