import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import volvoBefore from "../../images/volvov60before.jpg";
import volvoAfter from "../../images/volvov60after.jpg";
import renaultBefore from "../../images/renaultbefore.jpg";
import marius from "../../images/marius.jpg";
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
            <img src={volvoBefore} />
          </div>
          <div>
            <img src={volvoAfter} />
            <p className="legend">Volvo V60 înainte de reparație.</p>
          </div>
          <div>
            <img src={renaultBefore} />
            <p className="legend">Volvo V60 înainte de reparație.</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default SlideShow;
