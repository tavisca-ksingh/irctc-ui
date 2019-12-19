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
        <h3>Search Trains</h3>
        <input type="text" placeholder="Source"/>
        <input type="text" placeholder="Destination"/>
        <br/><br/>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />    
       <button >Search</button>
       <br/><br/>
        </div>
    );
  }
}
