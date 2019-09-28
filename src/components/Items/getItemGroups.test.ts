import { getItemGroups } from './getItemGroups';
import { IItem, ItemStatus } from '../../model/Item';

const item1: IItem = {
  createdAt: new Date(),
  favourite: false,
  name: 'name 1',
  status: ItemStatus.Open,
};

const item2: IItem = {
  createdAt: new Date(),
  favourite: true,
  name: 'name 2',
  status: ItemStatus.Open,
};

const item3: IItem = {
  createdAt: new Date(),
  favourite: false,
  name: 'name 3',
  status: ItemStatus.Closed,
};

test.each<any>([
  [
    [item1, item2, item3] as IItem[],
    () => true,
    ({ status }: IItem) => status,
    {
      [ItemStatus.Open]: [item1, item2],
      [ItemStatus.Closed]: [item3],
    },
  ],
  [
    [item1, item2, item3] as IItem[],
    () => false,
    ({ status }: IItem) => status,
    {},
  ],
  [
    [item1, item2, item3] as IItem[],
    ({ status }: IItem) => status === ItemStatus.Open,
    ({ favourite }: IItem) => favourite,
    {
      false: [item1],
      true: [item2],
    },
  ],
])('should return correctly grouped items', (items, filterFn, grouperFn, expected) => {
  expect(getItemGroups(items, filterFn, grouperFn)).toEqual(expected);
});
