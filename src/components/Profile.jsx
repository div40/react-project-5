import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <div>
      //displaying the username from login page
      <h2>Hello {user.username}</h2>
    </div>
  );
}

export default Profile;
