import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { HeaderWithRouter } from './components/Header';
import Calendar from './components/Calendar/Calendar';
import OfferDetails from './components/OfferDetails';
import HeaderSlider from './components/HeaderSlider';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Offers from './components/Offers';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/offer-details/:offerId' component={OfferDetailsPage}/>
        </Switch>
      </div>
    );
  }
}

class LandingPage extends Component{
  render(){
    return <div>
      <HeaderWithRouter main={true}/>
      <HeaderSlider/>
      <Offers />
      <WhyUs />
      <Contact />
    </div>
  }
}

class OfferDetailsPage extends Component{
  render(){
    return <div>
      <HeaderWithRouter />
      <OfferDetails linkParams={this.props.match.params.offerId}/>
    </div>
  }
}

export default App;
