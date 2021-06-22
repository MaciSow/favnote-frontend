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

export const Note: React.VFC<{}> = () => (
  <Card
    id="1"
    title="Hey hey hello"
    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, magni!"
    created="few days"
  />
);
export const Twitter: React.VFC<{}> = () => (
  <Card
    id="2"
    cardType="twitters"
    title="Hey hey hello"
    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, magni!"
    created="few days"
    twitterImg="https://escolarevolution.com.br/wp-content/uploads/2021/01/twitter-icon-square-logo-108D17D373-seeklogo.com_.png"
  />
);
export const Article: React.VFC<{}> = () => (
  <Card
    id="3"
    cardType="articles"
    title="Hey hey hello"
    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, magni!"
    created="few days"
    articleUrl="https://www.goodwood.com/"
  />
);
