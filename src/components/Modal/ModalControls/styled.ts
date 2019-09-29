import styled from 'styled-components';

export const StyledModalControls = styled.div`
  display: flex;
`;

export const StyledModalControl = styled.button`
  border-radius: 50%;
  height: 10px;
  width: 10px;
  padding: 0;
  margin: 0;
  border: 0;

  ${props => props.color ? `background: ${props.color}` : ''}
`;
