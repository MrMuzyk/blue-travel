import React, { Component } from 'react';

import './month.css';

const monthsNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień',
'Maj', 'Czerwiec', 'Lipiec', 'Śierpień', 'Wrzesień',
'Październik', 'Listopad', 'Grudzień'];
const monthsDaysLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

class Month extends Component{
  getClassName(day) {
    for(let i=0; i<this.props.selectedDays.length; i++) {
      if(day === this.props.selectedDays[i]){
        return 'calendar__selected';
      }
      return '';
    }
  } 
  generateGrid(){
    let temp = [];
    for(let i=0; i < monthsDaysLength[this.props.month]; i++){
      temp = [...temp, <div className={this.getClassName(i+1)}>{i+1}</div>];
    }
    return temp;
  }
  render() {
    let grid = this.generateGrid();
      return (
      <div>
        <div className="title">{monthsNames[this.props.month]} 2018</div>
          {this.props.lmao}
        </div>
      )
    }
}

export default Month;
