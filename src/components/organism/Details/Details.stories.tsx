import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Meta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { myTheme } from 'theme/mainTheme';
import Details from 'components/organism/Details/Details';

export default {
  title: 'Organism/Details',
  component: Details,
  decorators: [
    StoryRouter(),
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const title = 'Hello my friend';
const created = '24/12/2021';
const content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius eveniet 
 tempore. Consectetur dicta dolor, ea impedit laudantium magnam magni nemo obcaecati officia optio
 perspiciatis praesentium provident, quia. Atque beatae debitis quia. 
 Alias, aliquid at commodi culpa distinctio ducimus fugiat harum incidunt iure necessitatibus nemo 
 quo ratione repellendus rerum, sunt. Aut autem consectetur dolores facere inventore magni, nisi 
 nobis non nostrum placeat quam sed, sequi similique? Commodi deserunt distinctio eos eveniet ipsam 
 minus mollitia, perferendis placeat quaerat vel.`;
const handleRemove = () => {
  console.log('do it');
};

export const Note: React.VFC<{}> = () => (
  <Details title={title} created={created} content={content} handleRemove={handleRemove} />
);
export const Twitter: React.VFC<{}> = () => (
  <Details pageType="twitters" title={title} created={created} content={content} handleRemove={handleRemove} />
);
export const Article: React.VFC<{}> = () => (
  <Details pageType="articles" title={title} created={created} content={content} handleRemove={handleRemove} />
);
