import React from "react";
import "./Team.css";
import Member from "./Member/Member";
import gigiAvatar from "../../images/gigi.jpg";
import gigelAvatar from "../../images/gigel.jpg";
import alecsAvatar from "../../images/alecs.jpg";
import mariusAvatar from "../../images/marius.jpg";
import { Icon } from "semantic-ui-react";

class Team extends React.Component {
  render() {
    return (
      <div>
        <div className={"team-header"}>
          <Icon name={"group"} size={"huge"} circular inverted />
          <h1>Echipa noastră</h1>
        </div>
        <ul className={"team"}>
          <li className={"team-member"}>
            <Member
              img={gigiAvatar}
              name={"GIGI"}
              position={"Tinichigiu senior"}
              description={"Gigi face artă din această meserie."}
            />
          </li>
          <li className={"team-member"}>
            <Member
              img={mariusAvatar}
              name={"Marius"}
              position={"Tinichigiu"}
              description={
                "Experiență dobândită în Spania, Italia, Germania ..."
              }
            />
          </li>
          <li className={"team-member"}>
            <Member
              img={alecsAvatar}
              name={"Alexuțu"}
              position={"Preparator de cafea."}
              description={"Alex este pasionat de mașinuțe."}
            />
          </li>
          <li className={"team-member"}>
            <Member
              img={gigelAvatar}
              name={"Gigel"}
              position={"Gigel"}
              description={"Face de toate."}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Team;
