import styled from 'styled-components';
import { clrWhite, clrBlue } from '../colors';

interface IButtonProps {
  transparent?: boolean;
  whiteBorder?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  roundCorners?: boolean;
}

export const HeaderButton = styled.button<IButtonProps>`
  outline: none;
  cursor: pointer;
  padding: 12px;
  font-family: 'Adelon', 'sans-serif';
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.07em;

  ${props =>
    props.width &&
    `width: ${props.width};
  `}

  ${props =>
    props.height &&
    `height: ${props.height};
  `}

  ${props =>
    props.padding &&
    `padding: ${props.padding};
  `}

  ${props =>
    props.roundCorners &&
    `border-radius: 4px;
  `}

  ${props =>
    props.transparent &&
    `border: none;
     background-color: transparent;
     color: ${clrWhite};
     &:hover, &:active, &.active {
      background-color: rgba(255,255,255,0.1);
     }
  `}
  
  ${props =>
    props.whiteBorder &&
    `border: solid 2px;
    &:hover, &:active, &.active {
      background-color: ${clrWhite};
      color: ${clrBlue};
  }
`}
`;
