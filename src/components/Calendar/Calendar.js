import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Month from './Month';
import './calendar.css';

class Calendar extends Component{
  rootElement = document.getElementById('root')
    render() {
      return ReactDOM.createPortal(
        <div className="calendar">
          <div className="calendar__container">
            <div className="calendar__cross">X</div>
            <h1>Kalendarz</h1>
            <div className="calendar__month__container">
              <div className="calendar__month">
                <Month name="sierpien"/>
              </div>
              <div className="calendar__month">
                <Month name="wrzesien"/>
              </div>
            </div>
          </div>
        </div>
        , this.rootElement)
    }
}

export default Calendar;
