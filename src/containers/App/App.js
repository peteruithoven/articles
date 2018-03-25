import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import Articles from '../Articles/Articles.js'
import './App.css';

class App extends Component {
  render() {
    console.log('App');
    // const { todos } = this.props;
    return (
      <Router>
        <section className="App">
          <Route path="/:page?" component={ArticlesRoute} />
        </section>
      </Router>
    );
  }
}
const ArticlesRoute = ({match}) => (
  <Articles page={parseInt(match.params.page, 10) || 1} />
);

// export default connect(
//   state => ({
//     todos: state
//   })
// )(App);

export default App;
