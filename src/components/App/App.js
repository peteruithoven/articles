import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from '../../containers/Articles/Articles.js'
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer.js'
import Search from '../../containers/Search/Search.js'
import injectSheet from 'react-jss'
import styles from './style.js';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <section className={classes.container}>
          <main>
            <Switch>
              <Route path="/article/:id" component={ArticleRoute} />
              <Route path="/:page?" component={ArticlesRoute} />
            </Switch>
          </main>
          <aside className={classes.sidebar}>
            <Search />
          </aside>
        </section>
      </Router>
    );
  }
}
const ArticlesRoute = ({match}) => (
  <Articles page={parseInt(match.params.page, 10) || 1} />
);
const ArticleRoute = ({match}) => (
  <ArticleContainer id={match.params.id} />
);

export default injectSheet(styles)(App);
