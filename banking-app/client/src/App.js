import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pull in components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            {/* define routing paths */}
            <Route exact path="/" component={Landing} />
            {/* E.g. render the register component at localhost:3000/register */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
