import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { loadArticles } from '../../actions';
import { getArticlesList, getNumArticlesPages } from '../../reducers';
// import './Articles.css';
import Article from '../../components/Article/Article.js';
import injectSheet from 'react-jss'
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
    const { articles, numPages, page, classes } = this.props;
    const hasNewer = page > 1;
    const hasOlder = page < numPages;
    return (
      <Fragment>
        <div>
          {articles.map(article => (
            <Article
              key={article.id}
              {...article}
              footerLink={
                <Link to={`/article/${article.id}`}>{"Read more >>"}</Link>
              }
            />
          ))}
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
    numPages: getNumArticlesPages(state)
  }),
  {
    loadArticles
  }
)(injectSheet(styles)(Articles));
