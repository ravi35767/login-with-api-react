import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./components/Login"
import WelcomePage from './components/WelcomePage';
import TeacherProfile from './components/TeacherProfile';
import StudentProfile from './components/StudentProfile';
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
          <Route path="/teacher-profile">
            <TeacherProfile />
          </Route>
          <Route path="/student-profile">
            <StudentProfile />
          </Route>
        </Switch>
      </Router>
    );
  }
}

