import React, { useState } from "react";
import Body from "./Body";
import ChildComponent from "./ChildCompnent";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      Is user logged in: {false}
      <button onClick={login}>Login</button>
      <Body loggedIn={isLoggedIn} />
    </div>
  );
};

export default Root;
