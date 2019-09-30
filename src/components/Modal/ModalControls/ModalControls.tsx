import React, { FunctionComponent, useContext } from 'react';

import { ModalContext } from '../Modal';

import { StyledModalControl, StyledModalControlItem, StyledModalControls } from './styled';

interface IModalControlsProps {
}

export const ModalControls: FunctionComponent<IModalControlsProps> = () => {
  const context = useContext(ModalContext);
  return (
    <StyledModalControls>
      <StyledModalControlItem>
        <StyledModalControl
          color="#ff594f"
          onClick={() => context.updateContext({ open: false })}
          title="close the window"
        />
      </StyledModalControlItem>
      <StyledModalControlItem>
        <StyledModalControl
          color="#ffbc1b"
          onClick={() => {
            console.log('It does nothing, sorry!');
          }}
          title="click to do nothing"
        />
      </StyledModalControlItem>
      <StyledModalControlItem>
        <StyledModalControl
          color="#00cd46"
          onClick={() => context.updateContext({ maximized: !context.maximized })}
          title={`click to ${context.maximized ? 'unmaximize' : 'maximize'}`}
        />
      </StyledModalControlItem>
    </StyledModalControls>
  );
}

ModalControls.defaultProps = {
}

ModalControls.propTypes = {
};

