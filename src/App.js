import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './commponent/Home/Home';
import LoginSignup from './commponent/LoginSignup/LoginSignup';
function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login-signup">
            <LoginSignup />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
