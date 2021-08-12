import React from 'react';
import { connect } from 'react-redux';
import { Formik, FormikErrors } from 'formik';
import styled, { ThemeProps } from 'styled-components';

import withContext from 'hoc/withContext';
import { MyTheme } from 'theme/mainTheme';
import { addItem as addItemAction, TAction, TDispatch } from 'actions/actions';
import Heading from 'components/atoms/Heading/Heading';
import AddItemForm from '../../molecules/Form/AddItemForm';

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

type FormValues = {
  title: string;
  content: string;
  articleImageUrl: string;
  twitterName: string;
};
type NewItemBarProps = {
  handleResetForm: any;
  handleClose: any;
  isVisible: boolean;
  pageContext: string;
  addItem: TAction;
};

export type WarningValue = {
  invalidValue: boolean;
  firstClick: boolean;
};

const NewItemBar = ({ handleResetForm, handleClose, isVisible, pageContext, addItem }: NewItemBarProps) => {
  const inputWarning = {
    invalidValue: false,
    firstClick: false,
  } as WarningValue;

  const checkWarning = () => inputWarning.invalidValue && inputWarning.firstClick;
  const tickFirstClick = () => {
    inputWarning.firstClick = true;
  };

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
        onSubmit={(values) => {
          addItem(pageContext, values);
          handleClose();
        }}
      >
        {({ handleReset }) => (
          <AddItemForm
            handleResetForm={handleResetForm}
            handleReset={handleReset}
            tickFirstClick={tickFirstClick}
            checkWarning={checkWarning}
          />
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch: TDispatch) => ({
  addItem: (itemType: string, itemContent: object) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
