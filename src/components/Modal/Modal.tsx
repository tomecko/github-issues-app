import React, { FunctionComponent, ReactNode, createContext, useState } from 'react';

import { StyledModal } from './styled';

interface IModalProps {
  children: ReactNode;
}

export interface IModalContext {
  maximized: boolean;
  open: boolean;
}

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
      <StyledModal>
        {props.children}
      </StyledModal>
    </ModalContext.Provider>
  );
}

Modal.defaultProps = {
}

Modal.propTypes = {
};
