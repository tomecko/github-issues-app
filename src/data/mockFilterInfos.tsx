import React from 'react';

import { IItem, ItemStatus } from './../model/Item';
import { IFilterInfo } from './../components/Items';

import { IconGithub, IconOpenIssue, IconClosedIssue } from '../assets/icons';

export const mockFilterInfos: IFilterInfo[] = [
  {
    filterFn: () => true,
    icon: () => <IconGithub />,
    name: 'All',
  },
  {
    filterFn: ({ status }: IItem) => status === ItemStatus.Open,
    icon: () => <IconOpenIssue />,
    name: 'Open',
  },
  {
    filterFn: ({ status }: IItem) => status === ItemStatus.Closed,
    icon: () => <IconClosedIssue />,
    name: 'Closed',
  },
];
