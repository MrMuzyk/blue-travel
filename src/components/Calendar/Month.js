import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './month.css';

class Month extends Component{
  rootElement = document.getElementById('root')
    render() {
      return (
        <div>{this.props.name}</div>
      )
    }
}

export default Month;
