import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };
    return (
      <Slider {...settings}>
        <div id="home" className="item1">
          <div className="container">
            <div className="slide-content">
              <div className="slide-subtitle">
                <h4>NUESTRA BODA</h4>
              </div>
              <div className="slide-title">
                <h2>
                  <span className="names">MÓNICA</span> &{" "}
                  <span className="names">BENJAMÍN</span>
                </h2>
              </div>
              <div className="slide-text">
                <div className="slide-columns">
                  <p className="left-column">11 DE OCTUBRE
                    <br />
                    <span className="year">DE 2025</span>
                  </p>
                  <p className="right-column">HERMOSILLO, SONORA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;