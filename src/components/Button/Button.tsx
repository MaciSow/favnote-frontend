import styled, { css } from 'styled-components';

export interface Props {
  width?: string;
  secondary?: boolean;
}

const Button = styled.button`
  border: none;
  border-radius: 24px;
  background-color: #ffd82b;
  width: ${({ width }: Props) => width || '220px'};
  height: 47px;
  font-weight: 600;
  font-size: 1.6rem;
  padding: 0;
  text-transform: uppercase;

  ${({ secondary }: Props) =>
    secondary &&
    css`
      background-color: #666;
      width: 105px;
      height: 30px;
      font-size: 1rem;
    `}
`;

export default Button;
