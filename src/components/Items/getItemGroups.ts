import { groupBy } from 'lodash';

import { IItem } from './model/Item';

export const getItemGroups = <T>(
  items: IItem[],
  filterFn: (item: IItem) => boolean,
  grouperFn: (item: IItem) => T,
) => groupBy(items.filter(filterFn), grouperFn);
