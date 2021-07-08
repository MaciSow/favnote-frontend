import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { State } from 'reducers';
import { Article } from '../../data/cardContent';
import { fetchItems } from '../../actions/actions';

type ArticlesProps = {
  articles: Article[];
  fetchArticles: any;
};

class Articles extends Component<ArticlesProps> {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate cardsAmount={articles.length}>
        {articles.map(({ title, content, _id: id, articleUrl }) => (
          <Card id={id} title={title} content={content} articleUrl={articleUrl} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { articles } = state;
  return { articles };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
