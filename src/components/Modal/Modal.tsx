import React, { FunctionComponent } from 'react';

import { StyledModal } from './styled';

interface IModalProps {
}

export const Modal: FunctionComponent<IModalProps> = ({ children }) => {
  return (
    <StyledModal>
      {children}
    </StyledModal>
  );
}

Modal.defaultProps = {
}

Modal.propTypes = {
};

