import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { articles } from 'data/cardContent';

const pageType = 'articles';

const Articles = () => (
  <GridTemplate pageType={pageType}>
    {articles.map(({ title, content, created, id, articleUrl }) => (
      <Card
        id={id.toString()}
        cardType={pageType}
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

export default Articles;
