import styled from 'styled-components';

import background from '../../assets/background.jpg';

export const StyledApp = styled.div`
  &::after {
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    content: " ";
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
  }
`;
