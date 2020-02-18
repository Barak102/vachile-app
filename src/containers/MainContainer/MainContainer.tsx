// @flow

import React, { Component } from 'react';
import './MainContainer.scss';
import Sidebar from './Sidebar/Sidebar';
import { IMainContainerState } from 'src/containers/MainContainer/IMainContainerState';
import { IMainContainerProps } from 'src/containers/MainContainer/IMainContainerProps';
import { CarData } from 'src/data/carData.d';
import Car from 'src/components/Car/Car';
import { ICar } from 'src/types/ICar';
import { IFilterData } from 'src/types/IFilterData';
export default class MainContainer extends Component<IMainContainerProps, IMainContainerState> {
  constructor(props: IMainContainerProps) {
    super(props);
    this.state = {
      cars: [],
      filteredCars: []
    };
  }

  filterChangeHandler = (filter: IFilterData): void => {
    let filteredCars: ICar[] = [...this.state.cars];
    Object.keys(filter).forEach(propertyName => {
      const val: any = (filter as any)[propertyName];
      switch (propertyName) {
        case 'marketingYears':
          debugger;
          filteredCars = this.filterByManufacturingYears(filteredCars, +filter.marketingYears.from, +filter.marketingYears.to);
          break;
        case 'manufacturer':
        case 'type':
          if (val) {
            filteredCars = this.filterText(filteredCars, propertyName, (filter as any)[propertyName]);
          }
          break;
      }

      this.setState({ filteredCars });
    });
  };

  filterByManufacturingYears(cars: ICar[], from: number, to: number): ICar[] {
    return cars.filter(c => {
      return c.marketingYears.from >= from && c.marketingYears.to <= to;
    });
  }

  filterText(cars: ICar[], name: string, value: string): ICar[] {
    debugger;
    return cars.filter((c: any) => c[name].toLowerCase().indexOf(value.toLowerCase()) > -1);
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='sidebar'>
          <Sidebar filterChanged={this.filterChangeHandler} />
        </div>
        <div className='container'>
          <div className='title'>
            <h1>{this.props.title}</h1>
          </div>
          <div className='main-content'>{this.printCars()}</div>
        </div>
      </div>
    );
  }

  printCars = (): JSX.Element[] => {
    return this.state.filteredCars.map(c => {
      return <Car key={c.id} car={c} />;
    });
  };

  componentDidMount() {
    CarData.getCars((data: ICar[]) => {
      this.setState({ cars: data, filteredCars: data });
    });
  }
}
