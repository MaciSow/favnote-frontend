export type MyTheme = {
  notes: string;
  twitters: string;
  articles: string;
  warning: string;
  grey100: string;
  grey200: string;
  grey300: string;
  black: string;
  black07: string;
  light: number;
  bold: number;
  fontSize: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
};

export const myTheme = {
  notes: 'hsl(49, 100%, 58%)',
  twitters: 'hsl(196, 83%, 75%)',
  articles: 'hsl(106, 47%, 64%)',
  warning: 'hsl(0,79%,36%)',
  grey100: 'hsl(0, 0%, 96%)',
  grey200: 'hsl(0, 0%, 90%)',
  grey300: 'hsl(0, 0%, 70%)',
  black: 'hsl(0, 0%, 0%)',
  black07: 'hsl(0, 0%, 30%)',
  light: 300,
  bold: 600,
  fontSize: {
    xxs: '1rem',
    xs: '1.2rem',
    s: '1.6rem',
    m: '2.1rem',
    l: '2.4rem',
    xl: '4rem',
  },
} as MyTheme;
