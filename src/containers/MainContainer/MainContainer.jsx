import React, { Component } from "react";
import "./MainContainer.scss";
import Sidebar from "./Sidebar/Sidebar";
import Car from "../../components/Car/Car";
import { cars } from "./../../data/carData.js";
export default class MainContainer extends Component {
  state = {
    cars: []
  };
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="container">
          <div className="title">
            <h1>{this.props.title}</h1>
          </div>
          <div className="main-content">
            {this.state.cars.map(c => (
              <Car key={c.id} car={c} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.state.cars = cars;
    this.setState({ cars: cars });
    console.log(this.state);
  }
}
