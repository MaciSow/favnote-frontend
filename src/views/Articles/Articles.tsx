import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { State } from 'reducers';
import { Article } from '../../data/cardContent';
import { fetchItems } from '../../actions/actions';

type ArticlesProps = {
  articles: Article[];
  fetchArticles: any;
};

class Articles extends Component<ArticlesProps> {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate>
        {articles.map(({ title, content, _id: id, articleImageUrl }) => (
          <Card id={id} title={title} content={content} articleUrl={articleImageUrl} key={id} />
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
