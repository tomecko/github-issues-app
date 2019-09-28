import React from 'react';

import { mockData } from '../../data/mockData';

import { Items } from '../Items';
import { Modal } from '../Modal';

import { StyledApp } from './styled';

export const App = () => {
  return (
    <StyledApp>
      <Modal>
        <Items items={mockData} />
      </Modal>
    </StyledApp>
  );
}

export default App;
