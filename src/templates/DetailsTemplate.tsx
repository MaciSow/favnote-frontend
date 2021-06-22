import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledWrapper = styled.div`
  margin: 100px;
  width: 100%;
  height: 100%;
`;

const DetailsTemplate = ({ children, pageType }: any) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>{children}</StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
};

export default DetailsTemplate;
