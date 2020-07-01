import styled from 'styled-components';
import { clrWhite } from '../colors';

export const MainCardContainer = styled.div`
  position: relative;
  align-self: center;
  background-color: ${clrWhite};
  border-radius: 6px;
  margin: -60px 30px 0px;
  max-width: 900px;
  min-height: 100px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  font-size: 16px;
  line-height: 24px;
`;
