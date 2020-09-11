import './month.component.css';
import React, { Component } from 'react';

export default class MonthComponent extends Component {

  render() {

    const startDate = this.props.startDate;
    const title = startDate.toLocaleString('default', { month: 'long' });
    const tempDate = new Date(startDate);
    const days = [];

    let day = 1;
    while (tempDate.getMonth() === startDate.getMonth()) {
      days.push(day);
      day = day + 1;
      tempDate.setDate(day);
    }

    for (let i = startDate.getDay(); i > 0; i--) {
      days.unshift('');
    }

    const dayTitles = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return (
     <div className='month-wrapper'> 
      <div className='month'>
        {title}
      </div>
      <div className='month-content'>
        {dayTitles.map(day => <div className='day day-title'>{day}</div>)}
        {days.map(day => <div className='day'>{day}</div>)}
      </div>
    </div>
    )
  }
} 