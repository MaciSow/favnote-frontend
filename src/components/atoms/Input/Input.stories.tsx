import React from 'react';
import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../../theme/mainTheme';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Normal: React.VFC<{}> = () => <Input placeholder="login" />;
export const Search: React.VFC<{}> = () => <Input search placeholder="search" />;
