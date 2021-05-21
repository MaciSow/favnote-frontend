import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>🐶 Woff</h1>
    <Button>Test</Button>
    <Button width="500px">Test</Button>
    <Button secondary>Small btn</Button>
  </div>
);

export default Root;
