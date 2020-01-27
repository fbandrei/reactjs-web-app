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
                {this.props.description}
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
            description={`
            Prestam operatii specifice de tinichigerie auto precum: antifonare, schimbari de aripi, usi si alte elemente de caroserie,
             aplicarea de ornamente, schimbari de parbrize/lunete,geamuri laterale, etc.
            Indiferent de gradul de avarie a caroseriei din impact sau starea avansata de rugina o putem aduce la starea initiala chiar 
            si cu elemente de caroserie recuperabile fara a mai fi nevoie sa cumparati alte piese, avand consultanta necesara pentru a duce 
            la final lucrarea masinii dumneavoastra cu un pret accesibil.`}
            img={tinichigerie}
          />
        </div>
        <div className={"serviceItem"}>
          <ServiceCard
            name={"Vopsitorie"}
            description={`Servicii de vopsitorie complete avand dotarile necesare cu vopsitori specializati, 
            fiind dotata cu laborator propriu de indentificare a nuantei si prepararea vopselei, fiind aplicata 
            intr-o cabina moderna ce asigura o uscare uniformizata perfect si rezistenta in timp.
            Vopselele auto folosite sunt de calitate superioara iar formulele de culoare fiind obtinute computerizat.
            Procesul de vopsire se desfasoara in cabina profesionala ce asigura un rezultat final de exceptie si o uscare rapida.
             Aerul folosit pentru ventilare si aerul cald folosit pentru uscare este filtrat pentru a evita depunerile de impuritati sau de particule de apa.`
            }
            img={vopsitorie}
          />
        </div>
        <div className={"serviceItem"}>
          <ServiceCard name={"Poliș"} description={`
          Polisharea este o actiune in urma careia se lustruieste suprafata vopselei de pe caroserie. Aceasta procedura poate fi simpla, 
          necesitand un singur pas, 
          sau un proces de durata care implica folosirea diferitelor paste si procedee de lustruire.
          Polishul profesional este un serviciu complex ce necesita o anumita pregatire in domeniu si nu de putine ori, am vazut autoturisme 
          polishate prea abraziv iar lacul de pe caroserie a fost compromis, desi ca rezultat optic masina poate arata bine.`} img={polish} />
        </div>
      </div>
    </div>
  );
};

export default Services;
