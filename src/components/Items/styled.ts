import styled from 'styled-components';

export const StyledItems = styled.div`
  align-items: stretch;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  height: 100%;

  @media (max-width: 650px) {
    flex-direction: column;
    width: 100vw;
  }
`;

export const StyledSidebar = styled.nav`
  background: #1f2234fd;
  min-width: 150px;
`;

export const StyledSidebarHeader = styled.header`
  background: #101022;
  padding: 10px;
`;

export const StyledItemGroups = styled.main`
  background: #f6f6f6;
  box-sizing: border-box;
  flex-grow: 1;
  min-width: 500px;
  overflow-y: auto;
  padding: 10px 15px;
`;
