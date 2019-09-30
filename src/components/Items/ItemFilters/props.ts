import { ReactNode } from 'react';

import { IItem } from '../../../model/Item';

export interface IItemFiltersProps {
  filter: IFilterInfo;
  filterInfos: IFilterInfo[];
  items: IItem[];
  onSelected: (filter: IFilterInfo) => void;
}

export interface IFilterInfo {
  filterFn: (item: IItem) => boolean;
  icon: () => ReactNode;
  name: string;
}

export interface IStyledItemFilterActionProps {
  selected: boolean;
}
