import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { State } from 'reducers';
import { Twitter } from 'data/cardContent';
import { fetchItems, TDispatch } from 'actions/actions';

type TwittersProps = {
  twitters: Twitter[];
  fetchTwitters: () => void;
};

class Twitters extends Component<TwittersProps> {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchTwitters();
  }

  render() {
    const { twitters } = this.props;
    return (
      <GridTemplate>
        {twitters.map(({ title, content, twitterName, _id: id, articleImageUrl }) => (
          <Card
            id={id}
            title={title}
            content={content}
            twitterName={twitterName}
            twitterImg={articleImageUrl}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { twitters } = state;
  return { twitters };
};

const mapDispatchToProps = (dispatch: TDispatch) => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
