import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card';
import { notes } from '../../data/cardContent';

const pageType = 'note';

const Notes = () => (
  <UserPageTemplate pageType={pageType}>
    <>
      {notes.map((item) => (
        <Card cardType={pageType} title={item.title} content={item.content} created={item.created} key={item.id} />
      ))}
    </>
  </UserPageTemplate>
);

export default Notes;
