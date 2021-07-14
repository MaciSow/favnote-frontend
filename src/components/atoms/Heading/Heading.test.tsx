import React from 'react';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../../theme/mainTheme';
import Heading from './Heading';
import '@testing-library/jest-dom/extend-expect';

describe('Heading Component', () => {
  it('Renders children text', () => {
    const { container, getByText } = render(
      <ThemeProvider theme={myTheme}>
        <Heading>Hello</Heading>
      </ThemeProvider>
    );

    expect(getByText('Hello')).toBeInTheDocument();
    expect(container.firstChild).not.toBeNull();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
