import React from 'react';
import { ThemeProvider } from 'styled-components';
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
const content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius eveniet 
 tempore. Consectetur dicta dolor, ea impedit laudantium magnam magni nemo obcaecati officia optio
 perspiciatis praesentium provident, quia. Atque beatae debitis quia. 
 Alias, aliquid at commodi culpa distinctio ducimus fugiat harum incidunt iure necessitatibus nemo 
 quo ratione repellendus rerum, sunt. Aut autem consectetur dolores facere inventore magni, nisi 
 nobis non nostrum placeat quam sed, sequi similique? Commodi deserunt distinctio eos eveniet ipsam 
 minus mollitia, perferendis placeat quaerat vel.`;

export const Note: React.VFC = () => <Details title={title} content={content} />;
export const Twitter: React.VFC = () => <Details title={title} content={content} />;
export const Article: React.VFC = () => <Details title={title} content={content} />;
