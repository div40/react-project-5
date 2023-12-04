import { useState } from "react";

import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <UserContextProvider>
          <h1>Context API</h1>
          <Login />
          <Profile />
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
