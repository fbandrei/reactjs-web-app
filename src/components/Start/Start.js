import React from "react";
import "./Start.css";
import bmw from "../../images/bmw.jpg";
import bmwmobile from "../../images/bmw-mobile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import {
  BrowserView,
  MobileView,
} from "react-device-detect"; 

const Start = () => (
  <div>
    <div className={"background-text"}>
      <div className={"icons"} >
        <FontAwesomeIcon icon={faCar} size="10x" />
      </div>

      <div className={"desktop-background-text"}>
        <p className={"p"}>Cauți o tinichigerie-vopsitorie auto în Alba Iulia?</p>
        <p className={"p"}>Haide la VALI & CARMEN SPEDITION</p>
      </div>
      <div className={"mobile-background-text"}>
        <p className={"p"}>Cauți o tinichigerie-vopsitorie auto în Alba Iulia?</p>
        <p className={"p"}>Haide la VALI & CARMEN SPEDITION</p>
      </div>
    </div>
    <BrowserView>
      <img src={bmw} alt="JOE AUTO" id="backgroundImg" />
    </BrowserView>
    <MobileView>
      <img src={bmwmobile} alt="JOE AUTO" id="backgroundImg" />
    </MobileView>
  </div>
);

export default Start;
