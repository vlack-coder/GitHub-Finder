import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../Layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/gthub/githubContext";

const User = ({match}) => {
  const githubContext = useContext(GithubContext);

  const { user, repos, loading, getUser, getRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    following,
    followers,
    hireable,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        back to search
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} alt="" style={{ width: "150px" }} />
          <h1>{name}</h1>
          <p>location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h1>bio</h1>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            {" "}
            visit github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: {login}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: {company}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>blog: {blog}</strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="card text-center">
        <div className="badge badge-primary">Followers={followers}</div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
