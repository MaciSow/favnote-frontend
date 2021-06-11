export type MyTheme = {
  primary: string;
  secondary: string;
  tertiary: string;
  grey100: string;
  grey200: string;
  grey300: string;
  black: string;
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
  primary: 'hsl(49, 100%, 58%)',
  secondary: 'hsl(196, 83%, 75%)',
  tertiary: 'hsl(106, 47%, 64%)',
  grey100: 'hsl(0, 0%, 96%)',
  grey200: 'hsl(0, 0%, 90%)',
  grey300: 'hsl(0, 0%, 70%)',
  black: 'hsl(0, 0%, 0%)',
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
