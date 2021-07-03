import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  //max-width: 400px;
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 16px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 32px;
  width: 350px;
`;

const StyledLink = styled(Link)`
  margin: 32px 0;
  text-transform: uppercase;
  color: black;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const LoginWindow = () => (
  <StyledWrapper>
    <Heading>Sign in</Heading>
    <StyledInput placeholder="login" />
    <StyledInput placeholder="password" />
    <Button buttoncolor="notes">sign in</Button>
    <StyledLink to="/">i want to register!</StyledLink>
  </StyledWrapper>
);

export default LoginWindow;
