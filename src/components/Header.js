import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import { withRouter } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

import paperPlane from './paper-plane-regular.svg';

class Header extends Component{

  constructor(props){
    super(props);
  }

  runCalendar = () => {

  }

  onLinkClick = (scrollValue, e) => {
    if(this.props.main){
      animateScroll.scrollTo(scrollValue)
    }
    else{
      this.props.history.push('/');
      setTimeout(() => { animateScroll.scrollTo(scrollValue) });
    }
  }

  render(){
    return <nav className="header main-width">
      <Link to="/"><div className="logo"><ReactSVG className="logo-paper-plane" path={paperPlane}/>Paper Plane</div></Link>
      <ul className="menu">
        <li onClick={ (e) => this.onLinkClick(650)}>oferty</li>
        <li onClick={ (e) => this.onLinkClick(1650)}>dlaczego my</li>
        <li onClick={ (e) => this.onLinkClick(2350)}>kontakt</li>
      </ul>
    </nav>
  }
}

export const HeaderWithRouter = withRouter(Header);
