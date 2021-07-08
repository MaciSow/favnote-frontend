import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#383838',
      },
    ],
  },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
};
