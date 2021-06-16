import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from '../../components/molecules/Card';
import { twitters } from '../../data/cardContent';

const pageType = 'twitter';

const Twitters = () => (
  <UserPageTemplate pageType={pageType}>
    <>
      {twitters.map((item) => (
        <Card
          cardType={pageType}
          title={item.title}
          content={item.content}
          twitterImg={item.twitterImg}
          created={item.created}
          key={item.id}
        />
      ))}
    </>
  </UserPageTemplate>
);

export default Twitters;
