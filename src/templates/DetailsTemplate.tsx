import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledWrapper = styled.div`
  margin: 100px;
  width: 100%;
  height: 100%;
`;

const DetailsTemplate = ({ children }: any) => (
  <UserPageTemplate>
    <StyledWrapper>{children}</StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DetailsTemplate;
