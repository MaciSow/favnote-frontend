import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { Formik, Form, Field, FormikErrors, ErrorMessage } from 'formik';
import withContext from 'hoc/withContext';
import { routes } from 'routes';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import LogoIcon from 'assets/icons/logo.svg';
import { authenticate as authenticateAction, registerUser as registerUserAction } from 'actions/actions';
import { State } from 'reducers';

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
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 16px;
`;

const StyledInput = styled(Input)`
  width: 350px;
`;

const StyledLink = styled(Link)`
  margin-bottom: 32px;
  text-transform: uppercase;
  color: black;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
`;

const FieldWrapper = styled.div`
  position: relative;
  padding-bottom: 36px;
`;

const StyledErrorMessage = styled.p<{ underButton?: boolean }>`
  position: absolute;
  left: 16px;
  bottom: 16px;
  margin: 0;
  color: ${({ theme }) => theme.error};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};

  ${({ underButton }) =>
    underButton &&
    css`
      left: 0;
      width: 100%;
      text-align: center;
    `}
`;

const StyledImage = styled.img`
  height: 128px;
`;

type ButtonProps = {
  load?: boolean;
};

const StyledButton = styled(Button)<ButtonProps>`
  ${({ load }) =>
    load &&
    css`
      background-color: ${({ theme }) => theme.grey200};
    `}
`;

type LoginRegisterPageProps = {
  pageContext: string;
  userID: string;
  authenticate: any;
  registerUser: any;
  isLoading: boolean;
  isError: boolean;
};

type FormValues = {
  username: string;
  password: string;
};

class LoginRegisterPage extends Component<LoginRegisterPageProps> {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    showError: this.props.isError,
  };

  componentDidUpdate(prevProps: Readonly<LoginRegisterPageProps>) {
    const { isError } = this.props;
    if (prevProps.isError !== isError) {
      this.setShowError();
    }
  }

  setShowError = () => {
    const { isError } = this.props;
    this.setState({
      showError: isError,
    });
  };

  render() {
    const { pageContext, userID, authenticate, registerUser, isLoading } = this.props;

    const { showError } = this.state;

    if (userID) {
      return <Redirect to={routes.home} />;
    }

    const buttonText = pageContext === 'register' ? pageContext : 'sing in';
    const linkText = `i want to ${pageContext === 'register' ? 'log in' : 'register'}`;
    const link = pageContext === 'register' ? routes.login : routes.register;
    const errorMessage = pageContext === 'register' ? 'Login is taken' : 'Login or password is invalid';

    return (
      <StyledWrapper>
        <StyledImage src={LogoIcon} alt="FavNote" />
        <Heading>Your new favourite online notes experience</Heading>
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={(values: FormValues) => {
            const errors = {} as FormikErrors<FormValues>;
            if (!values.username) {
              errors.username = 'Login can not be empty';
            } else if (['admin', 'null', 'god'].includes(values.username)) {
              errors.username = 'Seriously?';
            }

            if (!values.password) {
              errors.password = 'Without password we go anywhere';
            }

            return errors;
          }}
          onSubmit={({ username, password }, formik) => {
            if (pageContext === 'register') {
              registerUser(username, password);
              formik.resetForm();
              return;
            }
            authenticate(username, password);
          }}
        >
          {({ handleReset }) => (
            <StyledForm>
              <Heading>Sign {pageContext === 'register' ? 'up' : 'in'}</Heading>
              <FieldWrapper>
                <Field name="username" type="text" as={StyledInput} placeholder="login" />
                <ErrorMessage name="username" component={StyledErrorMessage} />
              </FieldWrapper>
              <FieldWrapper>
                <Field name="password" type="password" as={StyledInput} placeholder="password" />
                <ErrorMessage name="password" component={StyledErrorMessage} />
              </FieldWrapper>
              <FieldWrapper>
                <StyledButton type="submit" buttoncolor="notes" load={isLoading} disabled={isLoading}>
                  {buttonText}
                </StyledButton>
                {showError && <StyledErrorMessage underButton>{errorMessage}</StyledErrorMessage>}
              </FieldWrapper>
              <StyledLink
                to={link}
                onClick={() => {
                  this.setState({ showError: false });
                  handleReset();
                }}
              >
                {linkText}
              </StyledLink>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ userID = '', isLoading, isError }: State) => ({
  userID,
  isLoading,
  isError,
});

const mapDispatchToProps = (dispatch: any) => ({
  authenticate: (username: string, password: string) => dispatch(authenticateAction(username, password)),
  registerUser: (username: string, password: string) => dispatch(registerUserAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withContext(LoginRegisterPage));
