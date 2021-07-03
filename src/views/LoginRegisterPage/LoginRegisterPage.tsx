import React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import LogoIcon from 'assets/icons/logo.svg';
import { routes } from 'routes';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions/actions';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.notes};
  width: 100vw;
  height: 100vh;
  left: 0;
`;

const StyledForm = styled(Form)`
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
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledImage = styled.img`
  height: 128px;
`;

type LoginRegisterPageProps = {
  pageContext: string;
  userID: string;
  authenticate: any;
};

const LoginRegisterPage = ({ pageContext, userID, authenticate }: LoginRegisterPageProps) => {
  if (userID) {
    return <Redirect to={routes.home} />;
  }

  const buttonText = pageContext === 'register' ? pageContext : 'sing in';
  const linkText = `i want to ${pageContext === 'register' ? 'log in' : 'register'}`;
  const link = pageContext === 'register' ? routes.login : routes.register;

  return (
    <StyledWrapper>
      <StyledImage src={LogoIcon} alt="FavNote" />
      <Heading>Your new favourite online notes experience</Heading>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          authenticate(username, password);
        }}
      >
        {() => (
          <StyledForm>
            <Heading>Sign in</Heading>
            <Field name="username" type="text" as={StyledInput} placeholder="login" />
            <Field name="password" type="text" as={StyledInput} placeholder="password" />
            <Button type="submit" buttoncolor="notes">
              {buttonText}
            </Button>
            <StyledLink to={link}>{linkText}</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};
const mapStateToProps = ({ userID = null }) => ({
  userID,
});

const mapDispatchToProps = (dispatch: any) => ({
  authenticate: (username: string, password: string) => dispatch(authenticateAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withContext(LoginRegisterPage));
