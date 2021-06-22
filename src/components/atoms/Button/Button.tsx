import styled, { css, ThemeProps } from 'styled-components';
import { MyTheme } from 'theme/mainTheme';

type Props = {
  secondary?: boolean;
  buttonColor?: string;
};

const Button = styled.button<Props>`
  border: none;
  border-radius: 24px;
  background-color: ${({ buttonColor, theme }: Props & ThemeProps<MyTheme>) =>
    // @ts-ignore
    buttonColor ? theme[buttonColor] : 'white'};
  width: 220px;
  height: 47px;
  font-weight: 600;
  font-size: 1.6rem;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;

  ${({ secondary }: Props) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 1rem;
    `}
`;

export default Button;
