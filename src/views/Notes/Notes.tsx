import React from 'react';
import Card from 'components/molecules/Card';
import { notes } from 'data/cardContent';
import GridTemplate from 'templates/GridTemplate';

const pageType = 'notes';

const Notes = () => (
  <GridTemplate pageType={pageType}>
    {notes.map(({ title, content, created, id }) => (
      <Card cardType={pageType} id={id.toString()} title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
);

export default Notes;
