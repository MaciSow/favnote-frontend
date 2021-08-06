import styled from 'styled-components';

type Props = {
  icon?: string;
};

const ButtonIcon = styled.button<Props>`
  display: block;
  width: 74px;
  height: 74px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-size: 50%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border: none;
  outline: none;

  &.active {
    background-color: white;
  }

  &:focus-visible {
    box-shadow: 0 0px 6px 4px hsl(0, 0%, 0%, 0.15);
  }

  cursor: pointer;
`;

export default ButtonIcon;
