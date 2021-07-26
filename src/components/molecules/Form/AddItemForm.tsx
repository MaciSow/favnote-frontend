import React, { Component } from 'react';
import { ErrorMessage, Field, Form, FormikHandlers } from 'formik';
import styled, { css } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin-top: 16px;
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.grey100};
  font-family: 'Montserrat', sans-serif;
  border: none;
  border-radius: 16px;
  height: 20vh;
  width: 100%;
  min-height: 49px;
  max-height: 300px;
  margin-top: 16px;
  resize: vertical;
  outline: none;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;

const StyledButton = styled(Button)`
  margin-top: 100px;

  &:hover {
    font-size: 1.8rem;
  }

  transition: 150ms ease-in-out;
`;

const FieldWrapper = styled.div`
  position: relative;
  padding-bottom: 24px;
`;

type ErrorMessageProps = {
  warning?: boolean;
};

const StyledErrorMessage = styled.p<ErrorMessageProps>`
  position: absolute;
  left: 16px;
  bottom: 0;
  margin: 0;
  color: ${({ theme }) => theme.error};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  ${({ warning }) =>
    warning &&
    css`
      color: ${({ theme }) => theme.warning};
    `}
`;

type AddItemFormProps = {
  handleResetForm: any;
  pageContext: string;
  tickFirstClick: any;
  checkWarning: any;
  handleReset: FormikHandlers;
};

class AddItemForm extends Component<AddItemFormProps> {
  componentDidMount() {
    const { handleResetForm, handleReset } = this.props;
    handleResetForm(handleReset);
  }

  render() {
    const { pageContext, tickFirstClick, checkWarning } = this.props;

    return (
      <StyledForm>
        <FieldWrapper>
          <Field type="text" name="title" as={StyledInput} placeholder="title" />
          <ErrorMessage name="title" component={StyledErrorMessage} />
        </FieldWrapper>
        {pageContext === 'twitters' && (
          <FieldWrapper>
            <Field
              type="text"
              name="twitterName"
              as={StyledInput}
              placeholder="account name"
              onClick={() => {
                tickFirstClick();
              }}
            />
            <ErrorMessage name="twitterName" component={StyledErrorMessage} />
            {checkWarning() && <StyledErrorMessage warning>Do you not forget about somebody?</StyledErrorMessage>}
          </FieldWrapper>
        )}
        {pageContext !== 'notes' && (
          <FieldWrapper>
            <Field
              type="text"
              name="articleImageUrl"
              as={StyledInput}
              placeholder={`${pageContext === 'articles' ? 'article' : 'image'} link`}
              onClick={() => {
                tickFirstClick();
              }}
            />
            <ErrorMessage name="articleImageUrl" component={StyledErrorMessage} />
            {checkWarning() && pageContext === 'articles' && (
              <StyledErrorMessage warning>Where is this cool article?</StyledErrorMessage>
            )}
          </FieldWrapper>
        )}
        <FieldWrapper>
          <Field
            name="content"
            as={StyledTextArea}
            placeholder="Content"
            onClick={() => {
              tickFirstClick();
            }}
          />
          <ErrorMessage name="content" component={StyledErrorMessage} />
        </FieldWrapper>
        <StyledButton buttoncolor={pageContext} type="submit">
          Add {pageContext.substr(0, pageContext.length - 1)}
        </StyledButton>
      </StyledForm>
    );
  }
}

export default withContext(AddItemForm);
