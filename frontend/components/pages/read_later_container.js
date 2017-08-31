import { connect } from 'react-redux';
import { fetchCollection } from '../../actions/collection_actions';
import { fetchArticlesByCollection } from '../../actions/article_actions';
import { selectCollection } from '../../reducers/selectors';
import ReadLaterPage from './read_later_page';

const mapStateToProps = (state, { match }) => {
  const collectionTitle = match.params.title;
  return({
    collection: selectCollection(state, collectionTitle),
    articles: state.articles,
    latestArticles: state.articles.latest_articles,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCollection: collectionTitle => dispatch(fetchCollection(collectionTitle)),
    fetchArticlesByCollection: feedId => dispatch(fetchArticlesByCollection(feedId)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReadLaterPage);