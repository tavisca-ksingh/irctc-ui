import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Search.css'
export default class Search extends Component {
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
     
  
  render() {
    return (
        <div className="Search">
        
        <input type="text" placeholder="Source"/>
        <input type="text" placeholder="Destination"/>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />    
       <button >Search</button>
        </div>
    );
  }
}
