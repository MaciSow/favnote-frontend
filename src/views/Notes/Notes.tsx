import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card';
import GridTemplate from 'templates/GridTemplate';
import { State } from 'reducers';

const Notes = ({ notes }: State) => (
  <GridTemplate>
    {notes.map(({ title, content, id }) => (
      <Card id={id} title={title} content={content} key={id} />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state: State) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
