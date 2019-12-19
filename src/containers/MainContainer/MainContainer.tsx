// @flow

import React, { Component } from "react";
import "./MainContainer.scss";
import Sidebar from "./Sidebar/Sidebar";
import { IMainContainerState } from "src/containers/MainContainer/IMainContainerState";
import { IMainContainerProps } from "src/containers/MainContainer/IMainContainerProps";
import { CarData } from "src/data/carData.d";
import Car from "src/components/Car/Car";
export default class MainContainer extends Component<
  IMainContainerProps,
  IMainContainerState
> {
  constructor(props: IMainContainerProps) {
    super(props);
    this.state = {
      cars: []
    };
  }

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
          <div className="main-content">{this.printCars()}</div>
        </div>
      </div>
    );
  }

  printCars = (): JSX.Element[] => {
    return this.state.cars.map(c => {
      return <Car key={c.id} car={c} />;
    });
  };

  componentDidMount() {
    this.setState({ cars: CarData.getCars() });
  }
}
