import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import volvoBefore from "../../images/volvov60before.jpg";
import volvoAfter from "../../images/volvov60after.jpg";
import hala1 from "../../images/hala1.jpeg";
import hala2 from "../../images/hala2.jpeg";
import hala3 from "../../images/hala3.jpeg";
import porsche1 from "../../images/porsche1.jpeg";
import porsche2 from "../../images/porsche2.jpeg";
import porscheAfter1 from "../../images/porscheAfter1.png";
import porscheAfter2 from "../../images/porscheAfter2.png";
import golf4Before1 from "../../images/golf4Before1.jpeg";
import golf4After2 from "../../images/golf4After2.jpeg";
import "./SlideShow.css";
import { Icon } from "semantic-ui-react";

class SlideShow extends Component {
  render() {
    return (
      <div className={"containerCarousel"}>
        <div className={"textProcess"}>
          <Icon
            name={"photo"}
            circular
            inverted
            size={"huge"}
            color={"orange"}
          />
          <h1>Galerie</h1>
        </div>

        <Carousel
          className={"carousel"}
          showArrows={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          showIndicators={false}
          transitionTime={1000}
        >
          <div>
            <img src={hala1} alt="Hala 1 reparatii auto"/>
          </div>
          <div>
            <img src={hala2} alt="Hala 2 reparatii caroserie"/>
          </div>
          <div>
            <img src={hala3} alt="Hala 3 locul perfect unde iti poti repara masina"/>
          </div>
          <div>
            <img src={porsche1} alt="Porsche 1 înainte de reparație auto"/>
            <p className="legend">Porsche înainte de reparație.</p>
          </div>
          <div>
            <img src={porsche2} alt="Porsche 2 înainte de reparație auto"/>
            <p className="legend">Porsche înainte de reparație.</p>
          </div>
          <div>
            <img src={porscheAfter1} alt="Porsche după reparație și vopsire"/>
            <p className="legend">Porsche după reparație și vopsire.</p>
          </div>
          <div>
            <img src={porscheAfter2} alt="Porsche după reparație și vopsire"/>
            <p className="legend">Porsche după reparație și vopsire.</p>
          </div>
          <div>
            <img src={golf4Before1} alt="Golf 4 înainte de reparație auto."/>
            <p className="legend">Golf 4 înainte de reparație.</p>
          </div>
          <div>
            <img src={golf4After2} alt="Golf 4 după reparație și vopsire" />
            <p className="legend">Golf 4 după reparație.</p>
          </div>
          <div>
            <img src={volvoBefore} alt="Volvo inainte de reparație și vopsire"/>
            <p className="legend">Volvo V60 înainte de reparație.</p>
          </div>
          <div>
            <img src={volvoAfter} alt="Volvo după reparație și vopsire" />
            <p className="legend">Volvo V60 după reparație.</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default SlideShow;
