import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>TEST</h1>
        <Button>Almost</Button>
        <Button>Test long</Button>
        <Button secondary>Small btn</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
