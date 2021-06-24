import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import styled from 'styled-components';
import { routes } from 'routes';
import { articles, notes, twitters } from 'data/cardContent';
import Details from '../../components/organism/Details/Details';

type Props = {
  match: any;
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
    const { pageType, title, content, created, twitterImg, link } = this.state;
    const { id } = this.props.match.params;

    return (
      <DetailsTemplate pageType={pageType}>
        <Details
          id={id}
          pageType={pageType}
          title={title}
          content={content}
          created={created}
          twitterImg={twitterImg}
          link={link}
        />
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
