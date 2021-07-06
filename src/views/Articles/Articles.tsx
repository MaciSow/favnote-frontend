import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { State } from 'reducers';

const Articles = ({ articles }: State) => (
  <GridTemplate>
    {articles.map(({ title, content, id, articleUrl }) => (
      <Card id={id} title={title} content={content} articleUrl={articleUrl} key={id} />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state: State) => {
  const { articles } = state;
  return { articles };
};

export default connect(mapStateToProps)(Articles);
