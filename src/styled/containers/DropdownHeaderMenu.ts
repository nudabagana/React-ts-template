import styled from 'styled-components';
import { IResponsiveProps, responsiveProps } from '../utils';

interface IDropdownHeaderMenuProps extends IResponsiveProps {}

export const DropdownHeaderMenu = styled.div<IDropdownHeaderMenuProps>`
  ${responsiveProps};
  top: 40px;
  left: -8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(180deg, rgba(27, 40, 62, 1) 45%, rgba(20, 26, 31, 0.7) 100%);
  border-radius: 6px;
`;
