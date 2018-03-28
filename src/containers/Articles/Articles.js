import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Loader from "react-loader";
import injectSheet from 'react-jss'
import { loadArticles } from '../../actions';
import { getArticlesList, getNumArticlesPages } from '../../reducers';
import Article from '../../components/Article/Article.js';
import styles from './style.js';

class Articles extends Component {
  componentDidMount() {
    const { page, loadArticles } = this.props;
    loadArticles(page);
  }
  componentWillReceiveProps(nextProps) {
    const { page, loadArticles } = this.props;
    if (page !== nextProps.page) {
      loadArticles(nextProps.page);
    }
  }
  render() {
    const { articles, isFetching, numPages, page, classes } = this.props;
    const hasNewer = page > 1;
    const hasOlder = page < numPages;
    return (
      <Fragment>
        <div className={classes.list}>
          {articles.map(article => (
            <Article
              key={article.id}
              {...article}
              footerLink={
                <Link to={`/article/${article.id}`}>{"Read more >>"}</Link>
              }
            />
          ))}
          <Loader loaded={!isFetching} />
        </div>
        <footer className={classes.footer}>
          <div>
            {hasOlder && <Link to={`/${page+1}`} >{'<< Older articles'}</Link>}
          </div>
          <div>
            {hasNewer && <Link to={`/${page-1}`}>{'Newer articles >>'}</Link>}
          </div>
        </footer>
      </Fragment>
    );
  }
}

Articles.propTypes =  {
  page: PropTypes.number.isRequired
}

export default connect(
  state => ({
    articles: getArticlesList(state),
    isFetching: state.list.isFetching,
    numPages: getNumArticlesPages(state)
  }),
  {
    loadArticles
  }
)(injectSheet(styles)(Articles));
