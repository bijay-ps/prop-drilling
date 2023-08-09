import React from "react";
import GrandChild from "./GrandChild";

const ChildComponent = (props) => {
  console.log("Child: ");
  console.log(`${props.loggedIn}`);
  return (
    <div>
      Child Component <GrandChild loggedIn={props.loggedIn} />
    </div>
  );
};

export default ChildComponent;
