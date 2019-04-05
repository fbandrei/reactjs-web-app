import React from "react";
import "./Team.css";
import Member from "./Member/Member";
import gigiAvatar from "../../images/gigi.jpg";

class Team extends React.Component {
  render() {
    return (
      <div>
        <h1 className={"team-header"}>Echipa noastră</h1>
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
              img={gigiAvatar}
              name={"GIGI"}
              position={"Tinichigiu senior"}
              description={"Gigi face artă din această meserie."}
            />
          </li>
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
              img={gigiAvatar}
              name={"GIGI"}
              position={"Tinichigiu senior"}
              description={"Gigi face artă din această meserie."}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Team;
