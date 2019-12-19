// @flow

import React, { Component } from "react";
import "./Car.scss";
import { ICarProps } from "./ICarProps";

export default class Car extends Component<ICarProps> {
  render() {
    const { car } = this.props;
    return (
      <div className="car-item">
        <div className="img">
          <img src={car.image} className="img-dim" alt={car.manufacturer} />
        </div>
        <div className="details">
          <div className="detail">
            <span className="key">יצרן:</span>
            {car.manufacturer}
          </div>
          <div className="detail">
            <span className="key">דגם:</span>
            {car.model}
          </div>
          <div className="detail">
            <span className="key">שנה: </span>
            {car.year}
          </div>
          <div className="detail">
            <span className="key">צבע: </span>
            {car.color}
          </div>
          <div className="detail">
            <span className="key">גיר: </span>
            {car.gear}
          </div>
          <div className="detail">
            <span className="key">נפח מנוע: </span>
            {car.engineVolume}
          </div>
          <div className="detail">
            <span className="key">שנות שיווק: </span>
            {car.marketingYears.from}-{car.marketingYears.to}
          </div>
        </div>
      </div>
    );
  }
}
