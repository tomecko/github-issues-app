import { IItem, ItemStatus } from '../model/Item';

export const mockData: IItem[] = [
  {
    createdAt: new Date('2016-07-19 12:00'),
    favourite: true,
    name: 'Page changes',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-19 12:00'),
    favourite: true,
    name: 'Review of last changes',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-18 12:00'),
    favourite: false,
    name: 'Visual UI Update Review',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-18 12:00'),
    favourite: false,
    name: 'Sidebar changes',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-15 12:00'),
    favourite: false,
    name: 'Crash update',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-15 12:00'),
    favourite: true,
    name: 'Page visual UI Update Review',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-15 12:00'),
    favourite: false,
    name: 'Sidebar update',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-14 12:00'),
    favourite: true,
    name: 'Crash issues',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-14 12:00'),
    favourite: true,
    name: 'Visual update & Crash resolve',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-11 12:00'),
    favourite: false,
    name: 'Missing icon',
    status: ItemStatus.Closed,
  },
  {
    createdAt: new Date('2016-07-11 12:00'),
    favourite: true,
    name: 'Mission Impossible',
    status: ItemStatus.Closed,
  },
  {
    createdAt: new Date('2016-07-11 12:00'),
    favourite: true,
    name: 'Mission Possible',
    status: ItemStatus.Closed,
  },
];
