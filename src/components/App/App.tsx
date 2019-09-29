import React, { useState, Dispatch, SetStateAction } from 'react';
import { format, parseISO } from 'date-fns';

import { mockFilterInfos, mockItems } from '../../data';
import { IItem } from '../../model/Item';

import { Items } from '../Items';
import { Modal, ModalControls } from '../Modal';

import { StyledApp } from './styled';

const onItemUpdate =
  (items: IItem[], setItems: Dispatch<SetStateAction<IItem[]>>) =>
    (patch: Partial<IItem>) => {
      setItems(items.map(item => item.id === patch.id ? {...item, ...patch} : item));
    };

export const App = () => {
  const [items, setItems] = useState(mockItems);
  const groupByFormat = 'yyyy-MM-dd';
  return (
    <StyledApp>
      <Modal>
        <Items
          filterInfos={mockFilterInfos}
          groupBy={({ createdAt }) => format(createdAt, groupByFormat)}
          groupHeaderFormatter={val => format(parseISO(val), 'dd-LL-y')}
          items={items}
          onItemUpdate={onItemUpdate(items, setItems)}
          sidebarHeader={() => <ModalControls />}
        />
      </Modal>
    </StyledApp>
  );
}

export default App;
