import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styled, { ThemeProps } from 'styled-components';
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
  height: 30vh;
  margin-top: 30px;
  resize: vertical;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  margin-top: 100px;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  margin: 8px 0 0 16px;
  color: #7b0302;
`;

const NewItemBar = ({ handleClose, isVisible, pageContext, addItem }: any) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading big>Create new {pageContext.substr(0, pageContext.length - 1)}</Heading>
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', twitterName: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          // @ts-ignore
          errors.title = 'Title is required';
        }
        if (!values.content) {
          // @ts-ignore
          errors.content = 'Type something';
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
          <Field type="text" name="title" as={StyledInput} placeholder="title" />
          <StyledErrorMessage name="title" component="div" />
          {pageContext === 'articles' && <Field type="text" name="articleUrl" as={StyledInput} placeholder="link" />}
          {pageContext === 'twitters' && (
            <Field type="text" name="twitterName" as={StyledInput} placeholder="account name" />
          )}
          <Field name="content" as={StyledTextArea} placeholder="Content" />
          <StyledErrorMessage name="content" component="div" />

          <StyledButton buttoncolor={pageContext} type="submit">
            Add {pageContext.substr(0, pageContext.length - 1)}
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (itemType: string, itemContent: object) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
