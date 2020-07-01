import styled from 'styled-components';
import { clrWhite, clrBlue } from '../colors';

interface IButtonProps {
  transparent?: boolean;
  whiteBorder?: boolean;
  width?: string;
  padding?: string;
  roundCorners?: boolean;
}

export const Button = styled.button<IButtonProps>`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  font-family: 'Adelon', 'sans-serif';
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.07em;
  color: ${clrWhite};

  box-shadow:0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);
  background-color: #9c27b0;

  ${props =>
    props.width &&
    `width: ${props.width};
  `}

  ${props =>
    props.padding &&
    `padding: ${props.padding};
  `}

  ${props =>
    props.roundCorners &&
    `border-radius: 30px;
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
