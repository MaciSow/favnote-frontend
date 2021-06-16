import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card';
import { articles } from 'data/cardContent';

const pageType = 'article';

const Articles = () => (
  <UserPageTemplate pageType={pageType}>
    <>
      {articles.map((item) => (
        <Card
          cardType={pageType}
          title={item.title}
          content={item.content}
          articleUrl={item.articleUrl}
          created={item.created}
          key={item.id}
        />
      ))}
    </>
  </UserPageTemplate>
);

export default Articles;
