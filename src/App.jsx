import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/Users/Users";
import User from "./Components/Users/User";
import Search from "./Components/Users/Search";
import axios from "axios";
import Alert from "./Components/Layout/Alert";
import About from "./Components/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/gthub/GithubState";
import AlertState from "./context/alert/AlertState";

let githubclientid;
let githubsecret;
if (process.env.NODE_ENV !== "production") {
  githubsecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  githubclientid = process.env.REACT_APP_GITHUB_CLIENT_ID;
} else {
  githubsecret = process.env.GITHUB_CLIENT_SECRET;
  githubclientid = process.env.GITHUB_CLIENT_ID;
}

const App = () => {
   return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    {/* meant to be this.state but it has been destructured up  */}
                    <Alert alert={alert} />
                    <Search
                      showClear={users.length > 0 ? true : false}
                      setAlert={setUserAlert}
                    />
                    {/* the state are passed to the user so as to display them */}
                    <Users users={users} loading={loading} user={user} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
