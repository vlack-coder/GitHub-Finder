import React from "react";
import { Link } from "react-router-dom";

const RepoItem = ({ repo }) => {
  return (
    <div>
        <h3>
        <a href={repo.html_url} className="card">{repo.name} </a>
        </h3>
    </div>
  );
};

export default RepoItem;
