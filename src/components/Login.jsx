import { useState, useContext } from "react";
import React from "react";
import UserContext from "../context/UserContext";
import UserContextProvider from "../context/UserContextProvider";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //this setUser is coming from UserContextProvider
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //sending data from here to setUser
    setUser({ username, password });
  };
  return (
    <div className="loginpage">
      <h2>LOGIN</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
