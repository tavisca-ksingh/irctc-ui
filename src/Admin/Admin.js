import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./Admin.css";
import AddTrain from '../AddTrain/AddTrain'
import ShowStops from "../ShowStops/ShowStops";
import ShowTrains from "../ShowTrain/ShowTrain";
export default class Admin extends Component {

    state ={
        index: 0
    }

    getIndex = (index) =>{
        this.setState({
            index:index
        });
    }
  render() {
    return (
      <div>
        <h2 class="heading">Admin DashBoard</h2>
        <br></br>
        <div class="table">
          <Popup
            trigger={<button class="button">Add Train</button>}
            modal
            closeOnDocumentClick
          >
            <AddTrain></AddTrain>
          </Popup>
          <br></br>
          <Popup
            trigger={<button class="button">Show Trains</button>}
            modal
            closeOnDocumentClick
          >
            <ShowTrains class="showtrain"></ShowTrains>
          </Popup>
          <br></br>
          <Popup
            trigger={<button class="button">Search Train</button>}
            modal
            closeOnDocumentClick
          >
            <Popup trigger={<input type = "text" onChange = {() => this.getIndex}/>} modal closeOnDocumentClick>
              <ShowStops index={this.state.index}></ShowStops>
            </Popup>
          </Popup>
          <br></br>
          <Popup
            trigger={<button class="button">Update Train</button>}
            modal
            closeOnDocumentClick
          >
            <h2>Hello</h2>
          </Popup>
          <br></br>
          <Popup
            trigger={<button class="button">Delete Train</button>}
            modal
            closeOnDocumentClick
          >
            <h2>Hello</h2>
          </Popup>
        </div>
      </div>
    );
  }
}
