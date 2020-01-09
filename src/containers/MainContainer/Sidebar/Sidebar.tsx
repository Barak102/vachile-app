import React, { Component } from "react";
import "./Sidebar.scss";
import DateRange from "src/components/DateRange/DateRange";
import TextInput from "src/components/TextInput/TextInput";
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
        <TextInput name="manufacturer" placeHolder="יצרן" title="יצרן"/>
        <TextInput name="type" placeHolder="סוג" title="סוג"/>
          <DateRange
            title="שנות שיווק"
            minimumYear={1900}
            maximumYear={2019}
            minTitle="משנה"
            maxTitle="עד שנה"
            YearChanged={this.rangeYearChangedHandler}
          />
                    <DateRange
            title="שנות ייצור"
            minimumYear={1900}
            maximumYear={2019}
            minTitle="משנה"
            maxTitle="עד שנה"
            YearChanged={this.rangeYearChangedHandler}
          />
        </div>
    );
  }
}

export default Sidebar;
