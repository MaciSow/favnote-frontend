import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import styled from 'styled-components';
import { routes } from 'routes';
import Details from 'components/organism/Details/Details';
import { State } from 'reducers';
import { connect } from 'react-redux';

type Props = {
  match: any;
  state: State;
};

class DetailsPage extends Component<Props> {
  state = {
    pageType: 'notes',
    title: '',
    created: '',
    content: '',
    twitterImg: '',
    link: '',
  };

  componentDidMount() {
    const { path } = this.props.match;

    switch (path) {
      case routes.note:
        this.clearState();
        this.setState({ pageType: 'notes' });
        this.setNewNote();
        break;
      case routes.twitter:
        this.clearState();
        this.setState({ pageType: 'twitters' });
        this.setNewTwitter();
        break;
      case routes.article:
        this.clearState();
        this.setState({ pageType: 'articles' });
        this.setNewArticle();
        break;
      default:
        this.clearState();
        this.setState({ pageType: 'notes' });
        break;
    }
  }

  clearState = () => {
    this.setState({
      title: '',
      created: '',
      content: '',
      twitterImg: '',
      link: '',
    });
  };

  setNewNote = () => {
    const { notes } = this.props.state;
    const note = notes.find((item: any) => item.id.toString() === this.props.match.params.id);
    if (note) {
      this.setState({
        title: note.title,
        created: note.created,
        content: note.content,
      });
    }
  };

  setNewTwitter = () => {
    const { twitters } = this.props.state;
    const twitter = twitters.find((item: any) => item.id.toString() === this.props.match.params.id);
    if (twitter) {
      this.setState({
        title: twitter.title,
        created: twitter.created,
        content: twitter.content,
        twitterImg: twitter.twitterImg,
        link: twitter.twitterAccount,
      });
    }
  };

  setNewArticle = () => {
    const { articles } = this.props.state;
    const article = articles.find((item: any) => item.id.toString() === this.props.match.params.id);
    if (article) {
      this.setState({
        title: article.title,
        created: article.created,
        content: article.content,
        link: article.articleUrl,
      });
    }
  };

  render() {
    const { title, content, created, twitterImg, link } = this.state;
    const { id } = this.props.match.params;

    return (
      <DetailsTemplate>
        <Details id={id} title={title} content={content} created={created} twitterImg={twitterImg} link={link} />
      </DetailsTemplate>
    );
  }
}

const mapStateToProps = (state: State) => ({ state });

export default connect(mapStateToProps)(DetailsPage);