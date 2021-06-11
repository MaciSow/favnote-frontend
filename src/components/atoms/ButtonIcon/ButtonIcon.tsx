import styled from 'styled-components';

type Props = {
  icon?: string;
  active?: boolean;
};

const ButtonIcon = styled.button<Props>`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-size: 40%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border: none;

  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
`;

export default ButtonIcon;
