import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Member = props => {
  return (
    <div>
      <Card>
        <Image src={props.img} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>
            <span>{props.position}</span>
          </Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Member;
