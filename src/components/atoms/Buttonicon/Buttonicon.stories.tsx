import React from 'react';
import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../../theme/mainTheme';
import Buttonicon from './Buttonicon';

export default {
  title: 'Buttonicon',
  component: Buttonicon,
  decorators: [
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Primary: React.VFC<{}> = () => <Buttonicon>Primary</Buttonicon>;
export const Secondary: React.VFC<{}> = () => <Buttonicon>Secondary</Buttonicon>;
