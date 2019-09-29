import { IItem } from '../../../model/Item';

export interface IItemFiltersProps {
  filter: IFilterInfo;
  filterInfos: IFilterInfo[];
  items: IItem[];
  onSelected: (filter: IFilterInfo) => void;
}

export interface IFilterInfo {
  filterFn: (item: IItem) => boolean;
  name: string;
}

export interface IItemFilterProps {
  selected: boolean;
}
