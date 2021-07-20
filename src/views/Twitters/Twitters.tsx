import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { State } from 'reducers';
import { Twitter } from 'data/cardContent';
import { fetchItems } from 'actions/actions';

type TwittersProps = {
  twitters: Twitter[];
  fetchTwitters: any;
};

class Twitters extends Component<TwittersProps> {
  componentDidMount() {
    this.props.fetchTwitters();
  }

  render() {
    const { twitters } = this.props;
    return (
      <GridTemplate>
        {twitters.map(({ title, content, _id: id, twitterImg }) => (
          <Card id={id} title={title} content={content} twitterImg={twitterImg} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { twitters } = state;
  return { twitters };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
