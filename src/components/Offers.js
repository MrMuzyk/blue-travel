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
        console.log(data)
        console.log('call')
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
      console.log(this.state.offers);
      if (this.state.isLoading == false) {
        return <div className="">
          <h2>Oferty</h2>
          {
            this.state.offers.offers.map( (elem, index) => {
              return <div>{elem.name}</div>
            })
          }
        </div>
      }else {
        return <div className="">
          <h2>Oferty</h2>
      </div>
      }
    }
}

export default Offers;
