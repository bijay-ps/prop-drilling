import React from "react";
import ParentComponent from "./parent";

const Body = (props) => {
  console.log("Body: ", props.loggedIn);
  return (
    <div>
      Body component <ParentComponent loggedIn={props.loggedIn} />
    </div>
  );
};

export default Body;
