import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Header extends Component{

  constructor(props){
    super(props);
  }

  runCalendar = () => {

  }

  render(){
    return <nav className="header main-width">
      <Link to="/"><div className="logo">Blue travel</div></Link>
      <ul className="menu">
        <li onClick={ () => window.scrollTo(0, 700)}>oferty</li>
        <li onClick={ () => window.scrollTo(0, 1800)}>dlaczego my</li>
        <li onClick={ () => window.scrollTo(0, 2400)}>kontakt</li>
      </ul>
    </nav>
  }
}

export default Header;
