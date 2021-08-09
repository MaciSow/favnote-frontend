import React from 'react';
import Sidebar from 'components/organism/Sidebar/Sidebar';

type UserPageTemplateProps = {
  children: React.ReactElement;
};

const UserPageTemplate = ({ children }: UserPageTemplateProps) => (
  <>
    <Sidebar />
    {children}
  </>
);

export default UserPageTemplate;
