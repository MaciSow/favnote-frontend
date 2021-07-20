import styled from 'styled-components';
import { myTheme } from 'theme/mainTheme';
import React from 'react';
import Heading from '../Heading/Heading';

type Props = {
  size?: string;
  color?: string;
} & typeof defaultProps;

const defaultProps = {
  size: '10px',
  color: myTheme.black07,
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  text-align: center;
  color: ${({ color }) => color};
`;

const StyledAnimation = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: ${({ size }: Props) => size};
    height: ${({ size }: Props) => size};
    border-radius: 50%;
    background: ${({ color }: Props) => color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

const Loading = ({ color, size }: Props) => (
  <StyledWrapper>
    <StyledHeading color={color} big>
      Loading
    </StyledHeading>
    <StyledAnimation color={color} size={size}>
      <div />
      <div />
      <div />
      <div />
    </StyledAnimation>
  </StyledWrapper>
);

Loading.defaultProps = defaultProps;

export default Loading;
