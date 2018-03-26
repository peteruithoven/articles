import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { getSearchResults } from '../../reducers';
import * as actions from '../../actions';
import SearchInput from '../../components/SearchInput/SearchInput.js';
import injectSheet from 'react-jss'
import styles from './style.js';

const Search = ({ search, results, classes }) => (
  <section>
    <SearchInput onSearch={search}/>
    <ul className={classes.results}>
      {results.map(({ id, title }) => (
        <li key={id} className={classes.result}>
          <Link to={`/article/${id}`} className={classes.link}>{title}</Link>
        </li>
      ))}
    </ul>
  </section>
)

Search.propTypes =  {
  search: PropTypes.func.isRequired
}

export default connect(
  state => ({
    results: getSearchResults(state)
  }), {
    search: actions.search
  })(injectSheet(styles)(Search));
