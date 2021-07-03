import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Meta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { myTheme } from 'theme/mainTheme';
import LoginWindow from './LoginWindow';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.notes};
  width: 90vw;
  height: 90vh;
`;

export default {
  title: 'Organism/LoginWindow',
  component: LoginWindow,
  decorators: [
    StoryRouter(),
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <StyledWrapper>
          <Story />
        </StyledWrapper>
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Note: React.VFC<{}> = () => <LoginWindow />;
