import React from "react";
import "./Program.css";
import { Icon } from "semantic-ui-react";

const Program = () => (
  <div className={"container"}>
    <div className={"container-program"}>
      <div className={"program"}>
        <h1 className={"header-text"}>Program</h1>
        <div className={"days"}>
          <h3>Luni - Vineri: 08:00 - 17:00</h3>
          <h3>Marti: 08:00 - 17:00</h3>
          <h3>Miercuri: 08:00 - 17:00</h3>
          <h3>Joi: 08:00 - 17:00</h3>
          <h3>Vineri: 08:00 - 17:00</h3>
          <h3>Sambata: ÎNCHIS</h3>
          <h3>Duminică: ÎNCHIS</h3>
        </div>
      </div>
    </div>
    <div className={"container-contact"}>
      <h1 className={"contact-header"}>Contact</h1>
      <div className={"contact"}>
        <h2>
          <div className={"contactRows"}>
            <Icon loading circular color={"orange"} size="large" name="phone" />{" "}
            <div className={"contactTextPhoneNumber"}> <a href={"tel:+40745254700"}>0745254700</a> </div>
          </div>
        </h2>
        <h2>
          <a
            className={"links"}
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.facebook.com/Tinichigerie-Vopsitorie-Alba-Iulia-Vali-Carmen-Spedition-105086961088554/"}
          >
            <div className={"contactRows"}>
              <Icon
                name={"facebook"}
                color={"orange"}
                size={"large"}
                circular
              />
              <div className={"contactTextFacebook"}>
                {" "}
                Facebook{" "}
              </div>
            </div>
          </a>
        </h2>
        <h2>
          <a
            className={"links"}
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://www.google.com/maps/place/46%C2%B005'27.5%22N+23%C2%B036'00.4%22E/@46.090963,23.5979273,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x474ea81220073981:0xc1b2df4b08d78502!2zyJhvc2VhdWEgZGUgQ2VudHVyxIM!3b1!8m2!3d46.0775258!4d23.5964499!3m5!1s0x0:0x0!7e2!8m2!3d46.0909626!4d23.6001164"
            }
          >
            <div className={"contactRows"}>
              <Icon
                name={"map marker alternative"}
                color={"orange"}
                size={"large"}
                circular
              />
              <div className={"contactTextAddress"}>
                <p>Strada Călugăreni, nr 8, Alba Iulia</p>
                <p>(Șoseaua de centură Alba Iulia)</p>{" "}
              </div>
            </div>
          </a>
        </h2>
      </div>
    </div>
  </div>
);

export default Program;
