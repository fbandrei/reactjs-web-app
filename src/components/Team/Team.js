import React from "react";
import "./Team.css";
import Member from "./Member/Member";
import gigiAvatar from "../../images/gigi.jpg";
import silviuAvatar from "../../images/Silviu.jpeg";
import mihaiAvatar from "../../images/Mihai.jpeg";
import razvanAvatar from "../../images/Razvan.jpeg";
import mariusAvatar from "../../images/Marius.jpeg";
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
              img={silviuAvatar}
              name={"Silviu"}
              position={"Director"}
              description={
                ""
              }
            />
          </li>
          <li className={"team-member"}>
            <Member
              img={gigiAvatar}
              name={"GIGI"}
              position={"Tinichigiu vopsitor"}
            />
          </li>
          <li className={"team-member"}>
            <Member
              img={mariusAvatar}
              name={"Marius"}
              position={"Ajutor de tinichigiu"}
              description={
                ""
              }
            />
          </li>
          <li className={"team-member"}>
            <Member
              img={razvanAvatar}
              name={"Razvan"}
              position={"Ajutor de tinichigiu"}
              description={
                ""
              }
            />
          </li>
          <li className={"team-member"}>
            <Member
              img={mihaiAvatar}
              name={"Mihai"}
              position={"Ajutor de tinichigiu"}
              description={
                ""
              }
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Team;
