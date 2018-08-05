import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Offers extends Component{

    constructor(props){
      super(props);
      this.state = {
        offers: [],
        isLoading: true
      }
    }

    getOffers = () => {
      fetch('/json/offers.json', {
        headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }).then( resp => {
        return resp.json();
      }).then( data => {
          this.setState({
            offers: data,
            isLoading: false
          })
      })
    }

    componentWillMount(){
      this.getOffers();
    }

    render(){
      if (this.state.isLoading == false) {
        return <div className="offers-section main-width">
          <h2 className="offers-section-title">Oferty</h2>
          {
            this.state.offers.offers.map( (elem, index) => {
              return <div key={elem.index} className="offers-section-offer-container">
                <img src={elem.backgroundImagePath} className="offers-section-offer-image"/>
                <div className="offers-section-offer-details">
                  <h3 className="offers-section-offer-title">{elem.name}</h3>
                  <p className="offers-section-offer-description">{elem.description}</p>
                  <div className="offers-section-offer-container-buttons-container">
                    <div className="offers-section-button offers-section-button-price">
                      <p>{elem.price}</p>
                    </div>
                    <div className="offers-section-icons-container">
                      <img src="/images/front-page/offers/calendar.svg" className="offers-section-icon"/>
                      <img src="/images/front-page/offers/map-marker.svg" className="offers-section-icon"/>
                      <img src="/images/front-page/offers/plane.svg" className="offers-section-icon"/>
                      <img src="/images/front-page/offers/map.svg" className="offers-section-icon"/>
                      <img src="/images/front-page/offers/price-tag.svg" className="offers-section-icon"/>
                    </div>
                    <button className="offers-section-button offers-section-button-details">Więcej ></button>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      }else {
        return <div className="">
          <h2 className="offers-section-title">Oferty</h2>
      </div>
      }
    }
}

export default Offers;
