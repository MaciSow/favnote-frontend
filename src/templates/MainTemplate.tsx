import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { myTheme } from 'theme/mainTheme';

const MainTemplate = ({ children }: any) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
