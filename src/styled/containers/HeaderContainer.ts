import styled from 'styled-components';
import { clrWhite } from '../colors';

export const HeaderContainer = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  color: ${clrWhite};
  margin: 15px 30px;
`;
