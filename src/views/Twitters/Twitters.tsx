import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { State } from 'reducers';

const Twitters = ({ twitters }: State) => (
  <GridTemplate>
    {twitters.map(({ title, content, created, id, twitterImg }) => (
      <Card id={id} title={title} content={content} twitterImg={twitterImg} created={created} key={id} />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state: State) => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);
