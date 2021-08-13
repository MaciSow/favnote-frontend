import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Meta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { myTheme } from 'theme/mainTheme';
import NewItemBar from './NewItemBar';

export default {
  title: 'Organism/NewItemBar',
  component: NewItemBar,
  decorators: [
    StoryRouter(),
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

// export const Note: React.VFC<{}> = () => <NewItemBar  />;
// export const Twitter: React.VFC<{}> = () => <NewItemBar  />;
// export const Article: React.VFC<{}> = () => <NewItemBar  />;
