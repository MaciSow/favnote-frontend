import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { State } from 'reducers';

const Articles = ({ articles }: State) => (
  <GridTemplate>
    {articles.map(({ title, content, created, id, articleUrl }) => (
      <Card id={id.toString()} title={title} content={content} articleUrl={articleUrl} created={created} key={id} />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state: State) => {
  const { articles } = state;
  return { articles };
};

export default connect(mapStateToProps)(Articles);
