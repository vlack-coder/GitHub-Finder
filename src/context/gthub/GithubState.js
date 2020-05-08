// the githubstate contains the initial state
// and also contains the actions .... For every action, there is a type
import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_ALERT,
  GET_REPOS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
} from "../types";

const Githubstate = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  let githubclientid;
  let githubsecret;

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUser = async (User) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${User}&
    client_id=${githubclientid}
    &client_secret=${githubsecret}`
    );
    console.log(res.data);

    // setUsers(res.data.items);
    // setLoading(false); {we don't need this as we can set in the reducer to false}
    dispatch({
      type: SEARCH_USERS,
      // data to be sent to the reducer
      payload: res.data.items,
      // then the reducer is responsible for putting it in the state and
      // sending it to the component that needs it
    });
  };

  // Get User
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get_Repos
  const getRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear Users
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // the provider is returned as you would wrap all your app in one

  // provider takes in props also as a value... anything you want available
  // to the entire app to have is placed in the value

  return (
    <GithubContext.Provider
      // this will provide all these values for our components
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUsers,
        getRepos,
        getUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default Githubstate;
