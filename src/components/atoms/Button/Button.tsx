import styled, { css, ThemeProps } from 'styled-components';
import { MyTheme } from 'theme/mainTheme';

type Props = {
  secondary?: boolean;
  buttoncolor?: string;
};

const Button = styled.button<Props>`
  border: none;
  border-radius: 24px;
  background-color: ${({ buttoncolor, theme }: Props & ThemeProps<MyTheme>) =>
    // @ts-ignore
    buttoncolor ? theme[buttoncolor] : 'white'};
  width: 220px;
  height: 47px;
  font-weight: 600;
  font-size: 1.6rem;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  outline: none;

  ${({ secondary }: Props) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 1rem;
    `}

  &:focus-visible {
    box-shadow: 0 0px 6px 4px hsl(0, 0%, 0%, 0.15);
  }

  cursor: pointer;
`;

export default Button;
