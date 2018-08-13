import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Month from './Month';
import './calendar.css';

const WRZESIEN_2018 = (<div className="calendar__grid">
  <div>Pn</div>
  <div>Wt</div>
  <div>Śr</div>
  <div>Cz</div>
  <div>Pt</div>
  <div>So</div>
  <div>Nd</div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div className="calendar__selected">7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
  <div>25</div>
  <div>26</div>
  <div>27</div>
  <div>28</div>
  <div>29</div>
  <div>30</div>
</div>);

const PAZDZIERNIK_2018 = (<div className="calendar__grid">
  <div>Pn</div>
  <div>Wt</div>
  <div>Śr</div>
  <div>Cz</div>
  <div>Pt</div>
  <div>So</div>
  <div>Nd</div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div className="calendar__selected">4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <Link to="/"><div className="calendar__selected">17</div></Link>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
  <div>25</div>
  <div>26</div>
  <div>27</div>
  <div>28</div>
  <div>29</div>
  <div>30</div>
</div>);



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
                <Month month={9} selectedDays={[5, 2]} lmao={WRZESIEN_2018}/>
              </div>
              <div className="calendar__month">
                <Month month={10} selectedDays={[9, 13]}  lmao={PAZDZIERNIK_2018}/>
              </div>
            </div>
          </div>
        </div>
        , this.rootElement)
    }
}

export default Calendar;
