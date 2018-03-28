import React, { Component } from 'react'
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'
import debounce from 'lodash.debounce'
import Loader from "react-loader";
import Fader from '../Fader/Fader.js';
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
    const { classes, isSearching } = this.props;
    return (
      <form className={classes.form}>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.onChange}
          className={classes.input}
        />
        <Fader timeout={50}>
          {isSearching && <div>
            <Loader
              parentClassName={classes.loader}
              scale={0.5}
            />
          </div>}
        </Fader>
      </form>
    )
  }
}

SearchInput.propTypes =  {
  onSearch: PropTypes.func.isRequired,
  isSearching: PropTypes.bool
}

export default injectSheet(styles)(SearchInput);
