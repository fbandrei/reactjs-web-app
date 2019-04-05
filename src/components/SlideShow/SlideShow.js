import React from "react";
import { Fade } from "react-slideshow-image";
import "./SlideShow.css";
import slideShowImgOne from "../../images/slideShowImgOne.jpeg";
import slideShowImgTwo from "../../images/slideShowImgTwo.jpeg";

const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  autoplay: true
};

const SlideShow = () => {
  return (
    <Fade {...properties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={slideShowImgOne} alt={"JOE AUTO"} />
        </div>
      </div>

      <div className="each-fade">
        <div className="image-container">
          <img src={slideShowImgTwo} alt={"JOE AUTO"} />
        </div>
        <h2>HELLO</h2>
      </div>
    </Fade>
  );
};

export default SlideShow;
