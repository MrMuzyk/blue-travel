import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
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
          <Route path='/offer-details' component={OfferDetails}/>
        </Switch>
      </div>
    );
  }
}

class LandingPage extends Component{
  render(){
    return <div>
      <Header/>
      <HeaderSlider/>
      <Offers />
      <WhyUs />
      <Contact />
      <Calendar />
    </div>
  }
}

export default App;
