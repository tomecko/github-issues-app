import styled from 'styled-components';

import { IStyledModalProps, IStyledModalContentProps } from './props';

export const StyledModal = styled.div<IStyledModalProps>`
  position: absolute;
  overflow: hidden;
  display: flex;

  ${props => props.maximized
    ? `
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      transform: none;
    `
    : `
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      border-radius: 10px;
      box-shadow: 0 0 12px #333;
      max-height: 500px;
      opacity: .98;
    `}
`;

export const StyledModalContent = styled.div<IStyledModalContentProps>`
  width: 100%;
  ${props => props.maximized ? '' : 'height: 500px'}
`;
