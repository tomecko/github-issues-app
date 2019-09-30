import React, { FunctionComponent, createContext, useState } from 'react';

import { IModalContext, IModalProps } from './props';

import { StyledModal, StyledModalContent } from './styled';

const defaultContext = {
  maximized: false,
  open: true,
  updateContext: (_partial: Partial<IModalContext>) => {},
};
export const ModalContext = createContext(defaultContext);

export const Modal: FunctionComponent<IModalProps> = props => {
  const [state, setState] = useState(defaultContext);
  const context = {
    ...state,
    updateContext: (partial: Partial<IModalContext>) => {
      setState({...state, ...partial});
    }
  }
  if (!state.open) {
    return null;
  }
  return (
    <ModalContext.Provider value={context}>
      <StyledModal maximized={state.maximized}>
        <StyledModalContent maximized={state.maximized}>
          {props.children}
        </StyledModalContent>
      </StyledModal>
    </ModalContext.Provider>
  );
}

Modal.propTypes = {
};
