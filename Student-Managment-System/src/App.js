import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./components/Login"
import WelcomePage from './components/WelcomePage';
export default class App extends React.Component {


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/welcome">
            <WelcomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

