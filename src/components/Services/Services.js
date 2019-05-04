import React from "react";
import "./Services.css";
import { Button, Card, Icon, Image, Transition } from "semantic-ui-react";
import { LoremIpsum } from "lorem-ipsum";
import tinichigerie from "../../images/tinichigerie.jpg";
import polish from "../../images/polish.jpg";
import vopsitorie from "../../images/vopsitorie.jpg";

class ServiceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      toggleVisibilityForServices: 1
    };
  }

  toggleVisibility = () => {
    if (this.state.toggleVisibilityForServices === 1) {
      this.setState({
        visible: !this.state.visible,
        toggleVisibilityForServices: 0
      });
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.toggleVisibility, true);
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Transition visible={visible} duration={4000}>
          <Card
            color={"orange"}
            className={"card"}
            onMouseOver={this.toggleVisibility}
          >
            <Card.Content>
              <Image src={this.props.img} className={"img"} />
              <br />
              <Card.Header textAlign={"center"}>{this.props.name}</Card.Header>
              <Card.Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Card.Description>
            </Card.Content>
          </Card>
        </Transition>
      </div>
    );
  }
}

const Services = () => {
  return (
    <div className={"containerServices"}>
      <div className={"containerServicesHeader"}>
        <div>
          <Icon
            name={"settings"}
            size={"huge"}
            circular
            inverted
            color={"orange"}
          />
        </div>
        <div className={"textServices"}>
          <h1>Servicii</h1>
        </div>
      </div>
      <div className={"services"}>
        <div className={"serviceItem"}>
          <ServiceCard
            name={"Tinichigerie"}
            description={"Test"}
            img={tinichigerie}
          />
        </div>
        <div className={"serviceItem"}>
          <ServiceCard
            name={"Vopsitorie"}
            description={"Test"}
            img={vopsitorie}
          />
        </div>
        <div className={"serviceItem"}>
          <ServiceCard name={"Poliș"} description={"Test"} img={polish} />
        </div>
      </div>
    </div>
  );
};

export default Services;
