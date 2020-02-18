import React, { Component } from 'react';
import './Sidebar.scss';
import DateRange from 'src/components/DateRange/DateRange';
import TextInput from 'src/components/TextInput/TextInput';
import { ISidebarProps } from './ISidebarProps';
import { ISidebarState } from './ISidebarState';

class Sidebar extends Component<ISidebarProps, ISidebarState> {
  state: ISidebarState = {
    filter: {
      type: null,
      manufacturer: null,
      manufacturingYears: {
        from: 1900,
        to: 2019
      },
      marketingYears: {
        from: 1900,
        to: 2019
      }
    }
  };

  rangeYearChangedHandler = (name: string, from: number, to: number): void => {
    const filter: any = { ...this.state.filter };
    filter[name] = {
      from,
      to
    };
    this.setState(
      {
        filter
      },
      () => {
        const years: any = this.state.filter;
        console.log('minimum year:', years[name].from);
        console.log('maximum year:', years[name].to);
        this.props.filterChanged(this.state.filter);
      }
    );
  };

  textInputValueChangeHandler = (name: string, value: string) => {
    const filter: any = { ...this.state.filter };
    debugger;
    filter[name] = value;
    this.setState({
      filter
    } as any,() => {
      this.props.filterChanged(this.state.filter);
    });
  };

  render() {
    return (
      <div className='sidebar-wrapper'>
        <div className='sidebar-title'>
          <h2>אפשרויות חיפוש</h2>
        </div>
        <TextInput name='manufacturer' placeHolder='יצרן' title='יצרן' value={this.state.filter.manufacturer} valueChanged={this.textInputValueChangeHandler} />
        <TextInput name='type' placeHolder='סוג' title='סוג' value={this.state.filter.type} valueChanged={this.textInputValueChangeHandler} />
        <DateRange
          name='marketingYears'
          title='שנות שיווק'
          minimumYear={this.state.filter.marketingYears.from}
          maximumYear={this.state.filter.marketingYears.to}
          minTitle='משנה'
          maxTitle='עד שנה'
          includeEmptyValue={true}
          YearChanged={this.rangeYearChangedHandler}
        />
        <DateRange
          name='manufacturingYears'
          title='שנות ייצור'
          minimumYear={this.state.filter.manufacturingYears.from}
          maximumYear={this.state.filter.manufacturingYears.to}
          minTitle='משנה'
          maxTitle='עד שנה'
          includeEmptyValue={true}
          YearChanged={this.rangeYearChangedHandler}
        />
      </div>
    );
  }
}

export default Sidebar;
