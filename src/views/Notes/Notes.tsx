import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card';
import GridTemplate from 'templates/GridTemplate';
import { State } from 'reducers';

const pageType = 'notes';

const Notes = ({ notes }: State) => (
  <GridTemplate pageType={pageType}>
    {notes.map(({ title, content, created, id }) => (
      <Card cardType={pageType} id={id.toString()} title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state: State) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
