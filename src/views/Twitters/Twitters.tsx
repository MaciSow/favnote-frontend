import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from '../../components/molecules/Card';
import { twitters } from '../../data/cardContent';

const pageType = 'twitters';

const Twitters = () => (
  <GridTemplate pageType={pageType}>
    {twitters.map(({ title, content, created, id, twitterImg }) => (
      <Card
        id={id.toString()}
        cardType={pageType}
        title={title}
        content={content}
        twitterImg={twitterImg}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

export default Twitters;
