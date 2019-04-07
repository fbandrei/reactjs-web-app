import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slideShowImgOne from "../../images/slideShowImgOne.jpeg";
import slideShowImgTwo from "../../images/slideShowImgTwo.jpeg";
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
          showArrows={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          showIndicators={false}
          autoPlay={true}
          transitionTime={700}
        >
          <div>
            <img src={slideShowImgOne} />
            <p className="legend">
              Replace this text with a proper description of the process.
            </p>
          </div>
          <div>
            <img src={slideShowImgTwo} />
            <p className="legend">
              Replace this text with a proper description of the process.
            </p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default SlideShow;
