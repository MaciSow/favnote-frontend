import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledWrapper = styled.div`
  margin: 100px;
  height: 100%;
`;

type DetailsTemplateProps = {
  children: React.ReactElement;
};

const DetailsTemplate = ({ children }: DetailsTemplateProps) => (
  <UserPageTemplate>
    <StyledWrapper>{children}</StyledWrapper>
  </UserPageTemplate>
);

export default DetailsTemplate;
