import React from "react";

const GrandChild = (props) => {
  console.log(`${props.loggedIn}`);
  return (
    <div>
      GrandChild Componen, loggedIn: {props.loggedIn}
      {props.loggedIn && <p>User can purchase</p>}
    </div>
  );
};

export default GrandChild;
