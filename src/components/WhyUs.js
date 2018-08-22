import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class WhyUs extends Component{
    render(){
      return <div className="why-us-section main-width">
      <h2 className="why-us-section-title">Dlaczego my</h2>
      <div className="why-us-content">
          <div className="why-us-item">
            <img src="/images/front-page/why-us/price.svg" className="why-us-item-image"/>
            <h3 className="why-us-item-title">Niskie ceny</h3>
            <p className="why-us-item-description">Tylko najlepsze ofery w super cenach</p>
          </div>
          <div className="why-us-item">
            <img src="/images/front-page/why-us/plane.svg" className="why-us-item-image"/>
            <h3 className="why-us-item-title">Ilość lotnisk</h3>
            <p className="why-us-item-description">Liczba dostępnych lotnisk pozytywnie Cię zaskoczy</p>
          </div>
          <div className="why-us-item">
            <img src="/images/front-page/why-us/community.svg" className="why-us-item-image"/>
            <h3 className="why-us-item-title">Super ekipa</h3>
            <p className="why-us-item-description">Nasz zgrany zespół zadba o to, żeby nikt się nie nudził</p>
          </div>
        </div>
      </div>
    }
}

export default WhyUs;
