import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Header extends Component{
    render(){
      return <nav className="header main-width">
        <Link to="/"><div className="logo">Blue travel</div></Link>
      <ul className="menu">
          <li>oferty</li>
          <li>kalendarz</li>
          <li>dlaczego my</li>
          <li>kontakt</li>
        </ul>
      </nav>
    }
}

export default Header;
