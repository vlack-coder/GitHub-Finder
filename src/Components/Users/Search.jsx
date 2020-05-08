import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from '../../context/gthub/githubContext'

const Search = props => {
  const githubContext = useContext(GithubContext)
  const [Text, setText] = useState("");

  // the e.target.name is placed in a bracket so as to use it as a key
  const onchange = e => setText( e.target.value );

  //   the onSubmit works fine bcuz it's an arrow function.
  //   If not the this won't bind to the function so you would have to
  // explictly bind

 const onSubmit = e => {
    e.preventDefault();
    // this updates the state of what is passed in the search box empty or non empty
    if (Text === "") {
      githubContext.setAlert("please type a user name", "light");
      console.log("hfcchghg");
    } 
      githubContext.searchUser(Text);
      setText('')
    
  };
  const { showClear, clearUser } = props;
  return (
    <div>
      {/* if the onsubmit function wasn't an arrow function
          then you would have to bind  it as onSubmit.bind(this) */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Enter Username"
          value={Text}
          onChange={onchange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-block btn-dark"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUser}>
          Clear User
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  showClear: PropTypes.bool,
  setAlert: PropTypes.func.isRequired
};

export default Search;
