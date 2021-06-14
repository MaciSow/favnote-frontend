import React from 'react';
import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../../theme/mainTheme';
import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Normal: React.VFC<{}> = () => <Heading>Normal Heading</Heading>;
export const Big: React.VFC<{}> = () => {
  const text = `I'm BIG`;

  return <Heading big>{text}</Heading>;
};
