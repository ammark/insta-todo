import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Child = ({match}) =>(
<div>
<h3>{match.params.id} </h3>
</div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to="/neflix">Netflix</Link>
            </li>
            <li>
              <Link to="/zillow-group">Zillow group</Link>
            </li>
            <li>
              <Link to="/yahoo">Yahoo</Link>
            </li>
          </ul>

          <Route path='/:id' component={Child} />
        </div>
      </Router>
    );
  }
}

export default App;
