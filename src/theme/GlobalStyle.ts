import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    padding-left: 150px;
    font-size: 1.6rem;
    background-color: #eeeeee;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin: 0;
  }
`;

export default GlobalStyle;
