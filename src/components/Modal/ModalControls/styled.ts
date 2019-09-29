import styled from 'styled-components';

export const StyledModalControls = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledModalControl = styled.button`
  border-radius: 50%;
  cursor: pointer;
  height: 10px;
  width: 10px;
  padding: 0;
  margin: 0 10px 0 0;
  border: 0;

  ${props => props.color ? `background: ${props.color}` : ''}
`;
