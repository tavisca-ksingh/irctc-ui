import React, { Component } from 'react';
import './ShowTrain.css'
import data from '../data'
import Popup from "reactjs-popup";

import ShowStops from '../ShowStops/ShowStops';
const Trains = data.Trains;


export default class ShowTrains extends Component {

    state = {
        stops: []
      };
     
      handleChange = (index)=> {
        this.setState({
            stops: Trains[index].stops
        });
        console.log(this.state.stops);
      };


    render() {
        return (
            <div className="showtrain">
                <table className="TFtable">
        <thead><th>Train Id</th><th>Train Name</th><th>Total Seats</th><th>Book</th></thead>

                <tbody>
                    {
                    Trains.map((s,index) => {
                           return( 
                               
                               <tr>
                            <td>      
                            <Popup trigger = {<p  >  {s.id} </p> }
                            modal
                            closeOnDocumentClick>
                            <p  onClick=  {()=>this.handleChange(index)}>{s.id} </p>
                            <ShowStops stop = {this.state.stops}></ShowStops>   
                            </Popup>            
                             
                            </td><td>{s.name}</td><td>{s.totalSeats.FIRST_AC}</td><td><button>Book</button></td>
                            </tr>)
                        })
                    } </tbody></table>          
                
            </div>
        );
    }
}
