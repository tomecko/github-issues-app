import { ReactNode } from 'react';

import { IItem } from '../../model/Item';

import { IFilterInfo } from './ItemFilters';

export interface IItemsProps {
  filterInfos: IFilterInfo[];
  groupBy: (item: IItem) => string;
  groupHeaderFormatter: (key: string) => string;
  items: IItem[];
  onItemUpdate?: (item: Partial<IItem>) => void;
  sidebarHeader?: () => ReactNode;
  sortGroupsBy?: (a: string, b: string) => number;
}
