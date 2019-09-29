import { IItem, ItemStatus } from './../model/Item';
import { IFilterInfo } from './../components/Items';

export const mockFilterInfos: IFilterInfo[] = [
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
