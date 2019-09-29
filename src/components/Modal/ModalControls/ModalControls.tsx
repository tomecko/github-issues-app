import React, { FunctionComponent, useContext } from 'react';

import { ModalContext } from '../Modal';

import { StyledModalControl, StyledModalControls } from './styled';

interface IModalControlsProps {
}

export const ModalControls: FunctionComponent<IModalControlsProps> = () => {
  const context = useContext(ModalContext);
  return (
    <StyledModalControls>
      <StyledModalControl
        color={'#ff594f'}
        onClick={() => context.updateContext({ open: false })}
      />
      <StyledModalControl
        color={'#ffbc1b'}
        onClick={() => {
          console.log('It does nothing, sorry!');
        }}
      />
      <StyledModalControl
        color={'#00cd46'}
        onClick={() => context.updateContext({ maximized: !context.maximized })}
      />
    </StyledModalControls>
  );
}

ModalControls.defaultProps = {
}

ModalControls.propTypes = {
};

