import React, {useContext} from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../context/gthub/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext)
  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {/* the props (users) from the app.js is used */}
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};



const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridgap: "1rem",
};

export default Users;
