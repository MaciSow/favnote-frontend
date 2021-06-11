import React from 'react';
import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../../theme/mainTheme';
import Paragraph from './Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
  decorators: [
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Normal: React.VFC<{}> = () => (
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, sed?</Paragraph>
);
