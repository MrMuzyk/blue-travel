import React, { Component } from 'react';
import Slider from "react-slick";

class HeaderSlider extends Component{
    render(){
      var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

      return <div className="slider-wrapper">
        <Slider {...settings}>
            <div className="slide-content london-short-slide main-width">
              <h2 className="slide-title">Londyn 3 dni</h2>
              <p className="slide-description">Londyn wycieczka 3 dniowa</p>
            </div>
            <div className="slide-content norway-slide main-width">
              <h2 className="slide-title">Joga w Norwegii</h2>
              <p className="slide-description">Masz weekend, a do tego uwielbiasz podroże? Ta wycieczka jest własnie dla Ciebie!</p>
            </div>
            <div className="slide-content london-long-slide main-width">
              <h2 className="slide-title">Londyn 2 dni</h2>
              <p className="slide-description">Londyn super wycieczka 2 dniowa</p>
            </div>
        </Slider>
      </div>
    }
}

export default HeaderSlider;
