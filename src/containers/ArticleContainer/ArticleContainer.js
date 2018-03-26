import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { getArticle } from '../../reducers';
import Article from '../../components/Article/Article.js';

const mapStateToProps = (state, ownProps) => ({
  ...getArticle(state, ownProps.id),
  footerLink: (
    <Link to="#" onClick={ownProps.history.goBack}>Go back</Link>
  )
})
export default withRouter(
  connect(mapStateToProps)(Article)
);
