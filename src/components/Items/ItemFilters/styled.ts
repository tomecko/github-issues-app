import styled from 'styled-components';

import { IItemFilterProps } from './props';

export const StyledItemFilters = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 1em;
  padding: 0;
`;

export const StyledItemFilter = styled.li<IItemFilterProps>`
  color: #fff;
  display: flex;
  font-size: .8em;
  padding: 1em;

  background: ${props => props.selected ? "#ffffff0c" : "inherit"};
`;

export const StyledName = styled.span`
  flex-grow: 1;
`;

export const StyledCount = styled.span`
  flex-grow: 0;
  color: #8a8995;
`;
