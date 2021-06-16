import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Meta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { myTheme } from '../../../theme/mainTheme';
import Sidebar from './Sidebar';

export default {
  title: 'Organism/Sidebar',
  component: Sidebar,
  decorators: [
    StoryRouter(),
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Note: React.VFC<{}> = () => <Sidebar />;
export const Twitter: React.VFC<{}> = () => <Sidebar sideColor="twitter" />;
export const Article: React.VFC<{}> = () => <Sidebar sideColor="article" />;
