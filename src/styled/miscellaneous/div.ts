import styled from 'styled-components';
import { IResponsiveProps, responsiveProps } from '../utils';

interface IDivProps extends IResponsiveProps {
  pointer?: boolean;
}

export const Div = styled.div<IDivProps>`
  ${responsiveProps};
  ${props =>
    props.pointer &&
    `
    cursor: pointer;
  `};
`;
