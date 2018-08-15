import React, { Component } from 'react';

class OfferDetails extends Component{

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
      return <div className="offer-details-section">
        {
          this.state.offers.offers.map( (elem, index) => {
            if (elem.id == this.props.linkParams) {
            return <div key={elem.index}>
              <img src={elem.backgroundImagePath} className="offers-details-photo"/>
            <div className="offer-details-box main-width">
                <h2 className="offer-details-subtitle">{elem.name}</h2>
                <ul>
                  <li className="offer-details-detail-text"><img src="/images/front-page/offers/calendar.svg" className="icon"/>Daty: {elem.date}</li>
                  <li className="offer-details-detail-text"><img src="/images/front-page/offers/map-marker.svg" className="icon"/>Miejsce: {elem.destination}</li>
                  <li className="offer-details-detail-text"><img src="/images/front-page/offers/plane.svg" className="icon"/>Loty: {elem.flights}</li>
                  <li className="offer-details-detail-text"><img src="/images/front-page/offers/price-tag.svg" className="icon"/>Cena: {elem.price}</li>
                </ul>
                <h2 className="offer-details-subtitle">Plan wycieczki</h2>
                <p className="offer-details-description-text">{elem.tourPlanDescription}</p>
                <ul className="offer-details-list">
                  { elem.tourPlanDetails.map( (detail, detailNumber) => {
                    return <li>{detail.detailsText}</li>
                  })
                  }
                </ul>
                <h2 className="offer-details-subtitle">W skład ceny wchodzi</h2>
                <p className="offer-details-description-text">{elem.tourPriceDescription}</p>
              <ul className="offer-details-list">
                  { elem.tourPriceIncludes.map( (detail, detailNumber) => {
                    return <li>{detail.detailsText}</li>
                  })
                  }
                </ul>
                <button className="offer-details-book-button" type="button" >Rezerwuj wycieczke ></button>
              </div>
            </div>
            }
          })
        }
      </div>
    }else {
      return <div></div>
    }
  }
}

export default OfferDetails;
