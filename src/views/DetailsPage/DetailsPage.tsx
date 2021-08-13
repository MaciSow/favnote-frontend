import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import Details from 'components/organism/Details/Details';
import { State } from 'reducers';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import withContext, { PageContextProps } from 'hoc/withContext';
import axios from 'axios';
import { Item } from 'data/cardContent';

type MatchParams = {
  id: string;
};

type DetailsPageProps = {
  activeItem: Item;
} & RouteComponentProps<MatchParams> &
  PageContextProps;

type DetailsPageState = {
  activeItem: Item;
};

class DetailsPage extends Component<DetailsPageProps, DetailsPageState> {
  state = {
    activeItem: {
      _id: '',
      title: '',
      content: '',
      twitterName: '',
      articleImageUrl: '',
    },
  };

  componentDidMount() {
    const { activeItem, match } = this.props;

    if (activeItem) {
      this.setState({ activeItem });
    } else {
      const { id } = match.params;

      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate>
        <Details
          id={activeItem._id}
          title={activeItem.title}
          content={activeItem.content}
          twitterName={activeItem.twitterName}
          articleImageUrl={activeItem.articleImageUrl}
        />
      </DetailsTemplate>
    );
  }
}

const mapStateToProps = (state: State, ownProps: DetailsPageProps) => {
  // @ts-ignore
  if (state[ownProps.pageContext].length) {
    return {
      // @ts-ignore
      activeItem: state[ownProps.pageContext].find((item: Item) => item._id === ownProps.match.params.id),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
