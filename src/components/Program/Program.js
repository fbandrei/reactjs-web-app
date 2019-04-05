import React from "react";
import "./Program.css";
import { Icon } from "semantic-ui-react";

const Program = () => (
  <div className={"container"}>
    <div className={"container-program"}>
      <div className={"program"}>
        <h1 className={"header-text"}>Program</h1>
        <div className={"days"}>
          <h3>Luni: 09:00 - 17:00</h3>
          <h3>Marti: 09:00 - 17:00</h3>
          <h3>Miercuri: 09:00 - 17:00</h3>
          <h3>Joi: 09:00 - 17:00</h3>
          <h3>Vineri: 09:00 - 17:00</h3>
          <h3>Sambata: ÎNCHIS</h3>
          <h3>Duminică: ÎNCHIS</h3>
        </div>
      </div>
    </div>
    <div className={"container-contact"}>
      <h1 className={"contact-header"}>Contact</h1>
      <div className={"contact"}>
        <h2>
          <Icon loading circular color={"orange"} size="large" name="phone" />{" "}
          0743792091{" "}
        </h2>
        <h2>
          <Icon
            name={"map marker alternative"}
            color={"orange"}
            size={"large"}
            circular
          />
          Șoseaua de centură, nr. 14, Alba Iulia
        </h2>
      </div>
    </div>
  </div>
);

export default Program;
