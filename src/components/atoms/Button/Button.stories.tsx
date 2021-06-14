import React from 'react';
import { Meta } from '@storybook/react';
// import { withKnobs, select } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../../theme/mainTheme';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    // withKnobs,
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Note: React.VFC<{}> = () => (
  // const label = 'Colors';
  // const options = {
  //   Primary: 'hsl(49,100%,58%)',
  //   Secondary: 'hsl(196,83%,75%)',
  //   Tertiary: 'hsl(106,47%,64%)',
  // };
  //
  // const defaultValue = 'hsl(49,100%,58%)';
  // const groupId = 'GROUP-ID1';
  //
  // const value = select(label, options, defaultValue, groupId);

  <Button>Primary</Button>
);
export const Twitter: React.VFC<{}> = () => <Button secondary>Secondary</Button>;
