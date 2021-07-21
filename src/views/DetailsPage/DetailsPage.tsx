import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import styled from 'styled-components';
import { routes } from 'routes';
import Details from 'components/organism/Details/Details';
import { State } from 'reducers';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import axios from 'axios';

type Props = {
  match: any;
  pageContext: string;
  activeItem: any;
};

class DetailsPage extends Component<Props> {
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
          console.log(data);

          this.setState({ activeItem: data });
        })
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

const mapStateToProps = (state: State, ownProps: Props) => {
  // @ts-ignore
  if (state[ownProps.pageContext].length) {
    return {
      // @ts-ignore
      activeItem: state[ownProps.pageContext].find((item: any) => item._id === ownProps.match.params.id),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
