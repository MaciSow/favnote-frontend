import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { State } from 'reducers';

const pageType = 'twitters';

const Twitters = ({ twitters }: State) => (
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

const mapStateToProps = (state: State) => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);
