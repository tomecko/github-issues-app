import styled from 'styled-components';

import { IStyledModalProps, IStyledModalContentProps } from './props';

const maximized = `
  height: 100%;
  transform: none;
  width: 100%;
`;
const notMaximized = `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  box-shadow: 0 0 12px #333;
  max-height: 500px;
  overflow: hidden;
`;

export const StyledModal = styled.div<IStyledModalProps>`
  display: flex;

  @media (min-width: 651px) {
    ${props => props.maximized ? maximized : notMaximized}
    & > div {
      width: 100%;
    }
  }

  @media (max-width: 650px) {
    ${maximized}
    & > div {
      height: 100%;
    }
  }
`;

export const StyledModalContent = styled.div<IStyledModalContentProps>`
  ${props => props.maximized ? '' : 'height: 500px'}
`;
