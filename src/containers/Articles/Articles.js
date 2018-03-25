import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { loadArticles } from '../../actions';
// import './Articles.css';
import Article from '../../components/Article/Article.js';

class Articles extends Component {
  componentDidMount() {
    const { page, loadArticles } = this.props;
    console.log('page: ', page);
    loadArticles(page);
  }
  componentWillReceiveProps(nextProps) {
    const { page, loadArticles } = this.props;
    console.log('page: ', page);
    if (page !== nextProps.page) {
      loadArticles(nextProps.page);
    }
  }
  render() {
    console.log('Articles');
    const { articles, page } = this.props;
    const hasNext = page > 1;
    return (
      <section>
        <main className="Articles">
          {articles.length > 0 && articles.map(({id, title, description}) => (
            <Article
              key={id}
              title={title}
              description={description}
            />
          ))}
        </main>
        <footer>
          <Link to={`/${page+1}`}>Previous articles</Link>
          {hasNext && <Link to={`/${Math.max(page-1, 1)}`}>Next articles</Link>}
        </footer>
      </section>
    );
  }
}
Articles.propTypes =  {
  page: PropTypes.number.isRequired
}

export default connect(
  state => ({
    // TODO articlesListByDate
    articles: Object.values(state.articles.data)
  }),
  {
    loadArticles
  }
)(Articles);
