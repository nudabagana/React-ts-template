import { css } from 'styled-components';
import { mobileSize } from '../consts';

export const untilDesktop = (cssRules: string) => `
  @media (max-width: ${mobileSize}px) {
    ${cssRules}
  }
`;

export const afterMobile = (cssRules: string) => `
  @media (min-width: ${mobileSize + 1}px) {
    ${cssRules}
  }
`;

export interface IResponsiveProps {
  isHiddenDesktop?: boolean;
  isHiddenMobile?: boolean;
  onlyMobile?: boolean;
  onlyDesktop?: boolean;
}

export const responsiveProps = css<IResponsiveProps>`
  ${props =>
    (props.isHiddenDesktop || props.onlyMobile) &&
    `
    ${afterMobile('display: none !important')}
  `}

  ${props =>
    (props.isHiddenMobile || props.onlyDesktop) &&
    `
    ${untilDesktop('display: none !important')}
  `}
`;
