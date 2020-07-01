import { createGlobalStyle } from 'styled-components';
import { clrText, clrBck } from './colors';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Adelon';
  src: url('../assets/fonts/Adelon.ttf');
}

@font-face {
  font-family: 'AdelonBold';
  src: url('../assets/fonts/AdelonBold.ttf');
}

@font-face {
  font-family: 'AdelonLight';
  src: url('../assets/fonts/AdelonLight.ttf'); 
}

  html,
  body,
  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
   font-family: 'Adelon', 'sans-serif';
   font-weight: normal;
   color: ${clrText};
   background-color: ${clrBck};
   margin: 0;
   font-size: 14px;
  }

  img {
    flex-shrink: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover,
    &:active,
    &:focus,
    &:visited {
      text-decoration: none;
    }
  }
`;
