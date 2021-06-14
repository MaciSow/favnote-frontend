import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Meta } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';
import { myTheme } from '../../../theme/mainTheme';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  width: 240px;
  background: ${({ theme }) => theme.note};
`;

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <ThemeProvider theme={myTheme}>
        <YellowBackground>
          <Story />
        </YellowBackground>
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Bulb: React.VFC<{}> = () => <ButtonIcon icon={bulbIcon} />;
export const Logout: React.VFC<{}> = () => <ButtonIcon active icon={logoutIcon} />;
export const Pen: React.VFC<{}> = () => <ButtonIcon icon={penIcon} />;
export const Plus: React.VFC<{}> = () => <ButtonIcon icon={plusIcon} />;
export const Twitter: React.VFC<{}> = () => <ButtonIcon icon={twitterIcon} />;
