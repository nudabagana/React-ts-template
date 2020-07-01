import styled from 'styled-components';
import { responsiveProps, IResponsiveProps } from '../utils';

interface IImgProps extends IResponsiveProps {
  icon: string;
  flipped?: boolean;
  pointer?: boolean;
  shadow?: boolean;
  roundCorners?: boolean;
}

const getImg = (name: string) => {
  let img;
  try {
    img = require(`../../assets/${name}.png`);
  } catch (e) {
    img = require(`../../assets/no-img.png`);
  }
  return img;
};

export const Img = styled.img.attrs((props: IImgProps) => ({
  src: getImg(props.icon),
}))<IImgProps>`
  ${responsiveProps};
  flex-shrink: 0;
  position: relative;

  ${props =>
    props.pointer &&
    `
    cursor: pointer;
  `};

  ${props =>
    props.flipped &&
    `
    transform: rotate(180deg);
  `};

  ${props =>
    props.shadow &&
    `
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
        0 8px 10px -5px rgba(0, 0, 0, 0.2);
  `};

  ${props =>
    props.roundCorners &&
    `
    border-radius: 15px;
  `};
`;
