import styled from 'styled-components';

export const StyledModalControls = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledModalControlItem = styled.li`
  display: block;
  width: 20px;
`;

export const StyledModalControl = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  height: 20px;
  margin: 0;
  outline: 0;
  position: relative;
  width: 20px;

  &::before {
    border-radius: 50%;
    content: " ";
    position: absolute;
    top: 5px;
    left: 5px;
    height: 10px;
    width: 10px;
    ${props => props.color ? `background: ${props.color}` : ''}
  }
`;
