// @Flow
import React, { Component } from "react";
import "./Sidebar.scss";
import DateRange from "src/components/DateRange/DateRange";
class Sidebar extends Component {
  state = {};

  rangeYearChangedHandler = (
    minimumYear: number,
    maximumYear: number
  ): void => {
    console.log("minimum year:", minimumYear);
    console.log("maximum year:", maximumYear);
  };

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar-title">
          <h2>אפשרויות חיפוש</h2>
        </div>
        <div className="dateRange">
          <DateRange
            title="שנות שיווק"
            minimumYear={1900}
            maximumYear={2019}
            minTitle="משנה"
            maxTitle="עד שנה"
            YearChanged={this.rangeYearChangedHandler}
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
