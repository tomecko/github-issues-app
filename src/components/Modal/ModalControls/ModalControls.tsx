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
        color={'red'}
        onClick={() => context.updateContext({ open: false })}
      />
      <StyledModalControl color={'green'} />
    </StyledModalControls>
  );
}

ModalControls.defaultProps = {
}

ModalControls.propTypes = {
};

