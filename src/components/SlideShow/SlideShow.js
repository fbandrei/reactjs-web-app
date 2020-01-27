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
import porscheAfter1 from "../../images/porscheAfter1.jpeg";
import porscheAfter2 from "../../images/porscheAfter2.jpeg";
import golf4Before1 from "../../images/golf4Before1.jpeg";
import golf4Before2 from "../../images/golf4Before2.jpeg";
import golf4After1 from "../../images/golf4After1.jpeg";
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
            <img src={hala1} />
          </div>
          <div>
            <img src={hala2} />
          </div>
          <div>
            <img src={hala3} />
          </div>
          <div>
            <img src={porsche1} />
            <p className="legend">Porsche înainte de reparație.</p>
          </div>
          <div>
            <img src={porsche2} />
            <p className="legend">Porsche înainte de reparație.</p>
          </div>
          <div>
            <img src={porscheAfter1} />
            <p className="legend">Porsche după reparație și vopsire.</p>
          </div>
          <div>
            <img src={porscheAfter2} />
            <p className="legend">Porsche după reparație și vopsire.</p>
          </div>
          <div>
            <img src={golf4Before1} />
            <p className="legend">Golf 4 înainte de reparație.</p>
          </div>
          <div>
            <img src={golf4After2} />
            <p className="legend">Golf 4 după reparație.</p>
          </div>
          <div>
            <img src={volvoBefore} />
            <p className="legend">Volvo V60 înainte de reparație.</p>
          </div>
          <div>
            <img src={volvoAfter} />
            <p className="legend">Volvo V60 după reparație.</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default SlideShow;
