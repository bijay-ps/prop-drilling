import React from "react";
import ChildComponent from "./ChildCompnent";

const ParentComponent = (props) => {
  console.log("Parent: ");
  console.log(`${props.loggedIn}`);
  return (
    <div>
      Parent Component <ChildComponent loggedIn={props.loggedIn} />
    </div>
  );
};

export default ParentComponent;
