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

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
