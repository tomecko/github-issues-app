import { IItem } from '../../../model/Item';
import { ReactComponentElement } from 'react';

export interface IItemFiltersProps {
  filter: IFilterInfo;
  filterInfos: IFilterInfo[];
  items: IItem[];
  onSelected: (filter: IFilterInfo) => void;
}

export interface IFilterInfo {
  filterFn: (item: IItem) => boolean;
  icon: () => ReactComponentElement<any, any>;
  name: string;
}

export interface IItemFilterProps {
  selected: boolean;
}
