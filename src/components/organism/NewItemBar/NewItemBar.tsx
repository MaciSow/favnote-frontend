import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage, FormikErrors } from 'formik';
import styled, { css, ThemeProps } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { MyTheme } from 'theme/mainTheme';
import { addItem as addItemAction } from 'actions/actions';
import Heading from 'components/atoms/Heading/Heading';

type WrapperProps = {
  activecolor: string;
  isVisible: boolean;
};

const StyledWrapper = styled.div`
  border-left: 5px solid
    ${({ activecolor, theme }: WrapperProps & ThemeProps<MyTheme>) =>
      // @ts-ignore
      theme[activecolor]};
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 100px;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 500ms ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
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

const StyledInput = styled(Input)`
  margin-top: 16px;
  width: 100%;
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

type FormValues = {
  title: string;
  content: string;
  articleImageUrl: string;
  twitterName: string;
};
type NewItemBarProps = {
  handleClose: any;
  isVisible: boolean;
  pageContext: string;
  addItem: any;
};

const NewItemBar = ({ handleClose, isVisible, pageContext, addItem }: NewItemBarProps) => {
  type WarningValue = {
    invalidValue: boolean;
    firstClick: boolean;
  };

  const inputWarning = {
    invalidValue: false,
    firstClick: false,
  } as WarningValue;

  const checkWarning = (warning: WarningValue) => warning.invalidValue && warning.firstClick;

  return (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
      <Heading big>Create new {pageContext.substr(0, pageContext.length - 1)}</Heading>
      <Formik
        initialValues={{ title: '', content: '', articleImageUrl: '', twitterName: '' }}
        validate={(values: FormValues) => {
          const errors = {} as FormikErrors<FormValues>;
          if (!values.title) {
            errors.title = 'Title is required';
          } else if (!/^[^\s]*.*[^\s]$/.test(values.title)) {
            errors.title = 'Title is invalid, delete whitespaces on begin or end';
          }
          if (!values.content) {
            errors.content = 'Type something';
          } else if (!/^[^\s]*.*[^\s]$/s.test(values.content)) {
            errors.content = 'Description is invalid, delete whitespaces on begin or end';
          }

          inputWarning.invalidValue = !values.twitterName;

          if (!/^[^(\s|@)]*$/.test(values.twitterName)) {
            inputWarning.invalidValue = false;
            errors.twitterName = 'Name is invalid delete space or @';
          }

          if (pageContext === 'articles') {
            inputWarning.invalidValue = !values.articleImageUrl;
          }

          if (!/^[^\s]*$/.test(values.articleImageUrl)) {
            errors.articleImageUrl = 'Link is invalid delete whitespaces';
          }

          return errors;
        }}
        onSubmit={(values, formik) => {
          handleClose();
          addItem(pageContext, values);
          formik.resetForm();
        }}
      >
        {() => (
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
                    inputWarning.firstClick = true;
                  }}
                />
                <ErrorMessage name="twitterName" component={StyledErrorMessage} />
                {checkWarning(inputWarning) && (
                  <StyledErrorMessage warning>Do you not forget about somebody?</StyledErrorMessage>
                )}
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
                    inputWarning.firstClick = true;
                  }}
                />
                <ErrorMessage name="articleImageUrl" component={StyledErrorMessage} />
                {checkWarning(inputWarning) && pageContext === 'articles' && (
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
                  inputWarning.firstClick = true;
                }}
              />
              <ErrorMessage name="content" component={StyledErrorMessage} />
            </FieldWrapper>
            <StyledButton buttoncolor={pageContext} type="submit">
              Add {pageContext.substr(0, pageContext.length - 1)}
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (itemType: string, itemContent: object) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
