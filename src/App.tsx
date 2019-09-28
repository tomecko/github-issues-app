import React from 'react';
import './App.css';

import { Items } from './components/Items';
import { Modal } from './components/Modal';
import { mockData } from './data/mockData';

function App() {
  return (
    <div>
      <Modal>
        <Items items={mockData} />
      </Modal>
    </div>
  );
}

export default App;
