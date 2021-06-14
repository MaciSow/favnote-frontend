import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Meta } from '@storybook/react';
import Card from './Card';
import { myTheme } from '../../theme/mainTheme';

export default {
  title: 'modules/Card',
  component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Note: React.VFC<{}> = () => <Card />;
export const Twitter: React.VFC<{}> = () => <Card cardType="twitter" />;
export const Article: React.VFC<{}> = () => <Card cardType="article" />;
