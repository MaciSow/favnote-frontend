import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>TEST</h1>
    <Button>Almost</Button>
    <Button width="500px">Test long</Button>
    <Button secondary>Small btn</Button>
  </div>
);

export default Root;
