import React from "react";
import "./Start.css";
import bmw from "../../images/bmw.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarCrash,
  faPlus,
  faCar,
  faEquals
} from "@fortawesome/free-solid-svg-icons";

const Start = () => (
  <div>
    <div className={"background-text"}>
      <div className={"icons-desktop"}>
        <FontAwesomeIcon icon={faCarCrash} size="6x" />
        <FontAwesomeIcon icon={faPlus} size="6x" />
        <p className={"noi"}>
          <b>NOI</b>
        </p>
        <FontAwesomeIcon icon={faEquals} size="6x" />
        <FontAwesomeIcon icon={faCar} size="6x" color={"darkorange"} />
      </div>
      <div className={"icons-mobile"}>
        <FontAwesomeIcon icon={faCar} size="10x" />
      </div>

      <div className={"desktop-background-text"}>
        <p className={"p"}>Cauți o tinichigerie auto în Alba Iulia?</p>
        <p className={"p"}>Haide la GIGI AUTO!</p>
      </div>
      <div className={"mobile-background-text"}>
        <p className={"p"}>Cauți o tinichigerie auto în Alba Iulia?</p>
        <p className={"p"}>Haide la GIGI AUTO!</p>
      </div>
    </div>
    <img src={bmw} alt="JOE AUTO" id="backgroundImg" />
  </div>
);

export default Start;
