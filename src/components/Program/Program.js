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
          <div className={"contactRows"}>
            <Icon loading circular color={"orange"} size="large" name="phone" />{" "}
            <div className={"contactTextPhoneNumber"}> 0743792091 </div>
          </div>
        </h2>
        <h2>
          <a
            className={"links"}
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.facebook.com/alexandru.maierutiu"}
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
                Urmărește-ne pe Facebook!{" "}
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
              "https://www.google.com/maps/place/Strada+Orizontului,+Alba+Iulia/@46.0878555,23.5860208,18z/data=!4m5!3m4!1s0x474ea86a90306da3:0x5046312d71dc9464!8m2!3d46.0878406!4d23.5871902"
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
                Șoseaua de centură, nr. 14, Alba Iulia{" "}
              </div>
            </div>
          </a>
        </h2>
      </div>
    </div>
  </div>
);

export default Program;
