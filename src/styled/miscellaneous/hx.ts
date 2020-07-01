import styled from 'styled-components';

interface IHProps {
  underlineHover?: boolean;
}

export const H1 = styled.h1<IHProps>`
  margin-bottom: 25px;

  &:hover,
  &:focus {
    text-decoration: ${props => (props.underlineHover ? 'underline' : 'none')};
  }
`;

export const H2 = styled.h2<IHProps>`
  margin-bottom: 20px;

  &:hover,
  &:focus {
    text-decoration: ${props => (props.underlineHover ? 'underline' : 'none')};
  }
`;

export const H3 = styled.h3<IHProps>`
  margin-bottom: 15px;

  &:hover,
  &:focus {
    text-decoration: ${props => (props.underlineHover ? 'underline' : 'none')};
  }
`;

export const H4 = styled.h4<IHProps>`
  margin-bottom: 10px;

  &:hover,
  &:focus {
    text-decoration: ${props => (props.underlineHover ? 'underline' : 'none')};
  }
`;

export const H5 = styled.h5<IHProps>`
  margin-bottom: 5px;

  &:hover,
  &:focus {
    text-decoration: ${props => (props.underlineHover ? 'underline' : 'none')};
  }
`;
