import styled from 'styled-components';

export const StyledItems = styled.div`
  display: flex;
  align-items: stretch;
  height: 500px;
`;

export const StyledSidebar = styled.aside`
  background: #1f2234;
  min-width: 150px;
`;

export const StyledSidebarHeader = styled.header`
  padding: 15px;
`;

export const StyledItemGroups = styled.main`
  background: #f6f6f6;
  flex-grow: 1;
  min-width: 500px;
  overflow-y: auto;
  padding: 10px 15px;
`;
