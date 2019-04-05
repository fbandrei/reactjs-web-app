import React from "react";
import "./Start.css";
import backgroundStartImg from "../../images/backgroundStartImg.jpg";

const Start = () => (
  <div>
    <div className={"background-text"}>
      <div className={"desktop-background-text"}>
        <h1>Cauți o tinichigerie auto în Alba Iulia?</h1>
        <h1>Haide la GIGI AUTO!</h1>
      </div>
      <div className={"mobile-background-text"}>
        <h2>Cauți o tinichigerie auto în Alba Iulia?</h2>
        <h2>Haide la GIGI AUTO!</h2>
      </div>
    </div>
    <img src={backgroundStartImg} alt="JOE AUTO" id="backgroundImg" />
  </div>
);

export default Start;
