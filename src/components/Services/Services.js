import React from "react";
import "./Services.css";
import { Icon } from "semantic-ui-react";

const Services = () => {
  return (
    <div className={"containerServices"}>
      <div>
        <Icon
          name={"settings"}
          size={"huge"}
          circular
          inverted
          color={"orange"}
        />
      </div>
      <div className={"textServices"}>
        <h1>Servicii</h1>
      </div>
    </div>
  );
};

export default Services;
