import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Fader from '../../components/Fader/Fader.js';
import { getSearchResults } from '../../reducers';
import * as actions from '../../actions';
import SearchInput from '../../components/SearchInput/SearchInput.js';
import injectSheet from 'react-jss'
import styles from './style.js';

const Search = ({ search, results, isSearching, classes }) => (
  <section>
    <SearchInput onSearch={search} isSearching={isSearching}/>
    <Fader component="ul" className={classes.results}>
      {results.map(({ id, title }) => (
        <li key={id} className={classes.result}>
          <Link to={`/article/${id}`} className={classes.link}>{title}</Link>
        </li>
      ))}
    </Fader>
  </section>
)

Search.propTypes =  {
  search: PropTypes.func.isRequired
}

export default connect(
  state => ({
    results: getSearchResults(state),
    isSearching: state.search.isFetching
  }), {
    search: actions.search
  })(injectSheet(styles)(Search));
