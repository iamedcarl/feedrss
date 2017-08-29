import React from 'react';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';
import ArticleIndexItem from '../article/article_index_item';

class FeedShow extends React.Component {
  componentDidMount() {
    this.props.fetchArticlesByFeed(this.props.feed.id);
  }

  render() {
    const { feed } = this.props;
    
    if(this.props.latestArticles === undefined) { return null; }
    const articles = this.props.latestArticles.map(articleId => {
      return(
        <ArticleIndexItem
          key={articleId}
          article={this.props.articles[articleId]}
        />
      );
    });

    return(
      <div>
        <header className='header-bar nav-open'>
          <HeaderContainer />
        </header>

        <div className='sidebar'>
          <SideBar />
        </div>

        <div className='feed-show main nav-open'>
          <div className='container centered'>
            <div className='feed-show-header'>
              <div className='feed-show-header-title'>
                <img src={feed.icon_url} />
                <h1>{feed.title}</h1>
              </div>
              <div className='feed-show-desc'>
                {feed.description}
              </div>
            </div>
            <div className='feed-show-feed-box'>
              {articles}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedShow;
