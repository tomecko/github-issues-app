import React from 'react';
import './App.css';

import { Items } from './components/Items';
import { Modal } from './components/Modal';

function App() {
  return (
    <div>
      <Modal>
        <Items />
      </Modal>
    </div>
  );
}

export default App;
