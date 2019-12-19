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
                <table>
                    {
                    Trains.map((s,index) => {
                           return( <tr>
                            <td>
                              
                    <Popup trigger={ <p >{s.id} </p>} position="center" onClick = {()=>this.handleChange(index)}>
                    <ShowStops stop = {this.state.stops}/>
                    </Popup>
                           
                            </td><td>{s.name}</td><td>{s.totalSeats.FIRST_AC}</td><td><button>Book</button></td>
                            </tr>)
                        })
                    } </table>          
                
            </div>
        );
    }
}
