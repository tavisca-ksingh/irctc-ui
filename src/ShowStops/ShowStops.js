import React, { Component } from 'react';
import data from '../data'
const Trains = data.Trains;

export default class ShowStops extends Component {

   
     
  render(props) {
      
    return (
      <div className="Stops"><table>


      {
     
      this.props.stop.map((s) => {
             return( <tr>
              <td>{s.id}</td><td>{s.station.name}</td><td>{s.arrivalTime}</td>
              <td>{s.departureTime}</td><td>{s.distanceTravelled}</td>
              </tr>)
          })
      } </table>
      </div>
    );
  }
}
