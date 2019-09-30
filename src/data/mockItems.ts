import { IItem, ItemStatus } from '../components/Items';

export const mockItems: IItem[] = [
  {
    createdAt: new Date('2016-07-19 13:00'),
    favourite: true,
    id: 1,
    name: 'Page changes',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-18 12:00'),
    favourite: false,
    id: 2,
    name: 'Visual UI Update Review',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-19 12:00'),
    favourite: true,
    id: 3,
    name: 'Review of last changes',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-18 12:00'),
    favourite: false,
    id: 4,
    name: 'Sidebar changes',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-15 12:00'),
    favourite: false,
    id: 5,
    name: 'Crash update',
    status: ItemStatus.Closed,
  },
  {
    createdAt: new Date('2016-07-15 12:00'),
    favourite: true,
    id: 6,
    name: 'Page visual UI Update Review',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-15 12:00'),
    favourite: false,
    id: 7,
    name: 'Sidebar update',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-14 12:00'),
    favourite: true,
    id: 8,
    name: 'Crash issues',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-14 12:00'),
    favourite: true,
    id: 9,
    name: 'Visual update & Crash resolve',
    status: ItemStatus.Open,
  },
  {
    createdAt: new Date('2016-07-11 12:00'),
    favourite: false,
    id: 10,
    name: 'Missing icon',
    status: ItemStatus.Closed,
  },
  {
    createdAt: new Date('2016-07-11 12:00'),
    favourite: true,
    id: 11,
    name: 'Mission Impossible',
    status: ItemStatus.Closed,
  },
  {
    createdAt: new Date('2016-07-11 12:00'),
    favourite: true,
    id: 12,
    name: 'Mission Possible',
    status: ItemStatus.Closed,
  },
];
