import styled from 'styled-components';

import { IStyledItemFilterActionProps } from './props';

export const StyledItemFilters = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledItemFilter = styled.li`
`;

export const StyledItemFilterAction = styled.button<IStyledItemFilterActionProps>`
  display: flex;
  height: 100%;
  margin: 0;
  width: 100%;

  align-items: center;
  background: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: .9em;
  outline: 0;
  padding: 1em;
  text-align: left;
  transition: background-color .3s;

  background: ${props => props.selected ? "#ffffff0c" : "inherit"};

  &:hover {
    background: #ffffff05;
  }
`;

export const StyledIcon = styled.span`
  flex-grow: 0;
  margin-right: 10px;
`;

export const StyledName = styled.span`
  flex-grow: 1;
`;

export const StyledCount = styled.span`
  flex-grow: 0;
  color: #8a8995;
`;
