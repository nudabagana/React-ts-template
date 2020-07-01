import styled from 'styled-components';
import { clrBlueLight } from '../colors';

interface IAProps {
  fs?: string;
  lh?: string;
  noUnderline?: boolean;
  clrInfo?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  cursorPointer?: boolean;
}

export const A = styled.a<IAProps>`
  font-family: inherit;
  color: ${clrBlueLight};
  font-size: ${props => props.fs || 'inherit'};
  line-height: ${props => props.lh || 'inherit'};
  /* text-decoration: ${props => (props.noUnderline ? 'none' : 'underline')}; */
  ${props => props.cursorPointer && `cursor: pointer;`}

  &:hover,
  &:active,
  &:focus {
    text-decoration: ${props => (props.noUnderline ? 'none' : 'underline')};
  }
`;
