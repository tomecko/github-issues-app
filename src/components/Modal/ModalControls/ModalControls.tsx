import React, { FunctionComponent, useContext } from 'react';

import { ModalContext } from '../Modal';

import { StyledModalControl, StyledModalControls } from './styled';

interface IModalControlsProps {
}

export const ModalControls: FunctionComponent<IModalControlsProps> = () => {
  const context = useContext(ModalContext);
  return (
    <StyledModalControls>
      <li>
        <StyledModalControl
          color={'#ff594f'}
          onClick={() => context.updateContext({ open: false })}
        />
      </li>
      <li>
        <StyledModalControl
          color={'#ffbc1b'}
          onClick={() => {
            console.log('It does nothing, sorry!');
          }}
        />
      </li>
      <li>
        <StyledModalControl
          color={'#00cd46'}
          onClick={() => context.updateContext({ maximized: !context.maximized })}
        />
      </li>
    </StyledModalControls>
  );
}

ModalControls.defaultProps = {
}

ModalControls.propTypes = {
};

