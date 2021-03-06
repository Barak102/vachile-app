import React, { Component } from 'react';
import { IDateRangeProps } from './IDateRangeProps';
import './DateRange.scss';
import { IDateRangeState } from './IDateRangeState';

export default class DateRange extends Component<IDateRangeProps, IDateRangeState> {
  constructor(props: IDateRangeProps) {
    super(props);
    this.state = {
      minYears: [],
      maxYears: [],
    };
  }

  componentDidMount(): void {
    for (let year = this.props.minimumYear; year <= this.props.maximumYear; year++) {
      this.state.minYears.push(year);
    }
    this.setMaxYearsRange(this.props.minimumYear);
  }

  setMaxYearsRange(year: number): void {
    this.setState({
      maxYears: [...this.state.minYears].filter(y => y >= year)
    });
  }

  printYears(yearsArr: number[]): JSX.Element[] {
    return yearsArr.map(y => (
      <option key={y} id={y.toString()}>
        {y}
      </option>
    ));
  }

  handleYearChange = (e: any): void => {
    let targetSelect: any = e.target;
    let minYear: number = this.props.minimumYear;
    let maxYear: number = this.props.maximumYear;
    if (targetSelect.name === 'min') {
      minYear = targetSelect.value;
    } else {
      maxYear = targetSelect.value;
    }
    if (minYear > maxYear) {
      maxYear = minYear;
    }
      this.setMaxYearsRange(minYear);
      this.props.YearChanged(this.props.name, minYear, maxYear);
  };

  render() {
    return (
      <div className='dateRangeWrapper'>
        <div className='title'>{this.props.title}</div>
        <div className='fields'>
          <div className='field-item'>
            <div className='title'>{this.props.minTitle}</div>
            <div>
              <select name='min' className='field' onChange={this.handleYearChange} value={this.props.minimumYear}>
                {this.printYears(this.state.minYears)}
              </select>
            </div>
            <div className='field-item'>
              <div className='title'>{this.props.maxTitle}</div>
              <div>
                <select name='max' className='field' onChange={this.handleYearChange}>
                  {this.printYears(this.state.maxYears)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
