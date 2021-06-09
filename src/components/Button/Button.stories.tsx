import React from 'react';
import { Meta } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withKnobs],
} as Meta;

export const Primary: React.VFC<{}> = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49,100%,58%)',
    Secondary: 'hsl(196,83%,75%)',
    Tertiary: 'hsl(106,47%,64%)',
  };

  const defaultValue = 'hsl(49,100%,58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Primary</Button>;
};
export const Secondary: React.VFC<{}> = () => <Button secondary>Secondary</Button>;
