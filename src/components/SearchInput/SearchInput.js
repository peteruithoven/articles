import React, { Component } from 'react'
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'
import debounce from 'lodash.debounce'
import styles from './style.js';

class SearchInput extends Component {
  // debounce search queries by 300 ms
  requestSearch = debounce((query) => {
    this.props.onSearch(query);
  }, 200)
  onChange = (e) => {
    this.requestSearch(e.target.value.trim())
  }
  render() {
    const { classes } = this.props;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.onChange}
          className={classes.input}
        />
      </form>
    )
  }
}

SearchInput.propTypes =  {
  onSearch:  PropTypes.func.isRequired
}

export default injectSheet(styles)(SearchInput);
