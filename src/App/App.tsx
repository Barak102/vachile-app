// @flow

import React, { Component } from "react";
import "./App.scss";
import MainContainer from "src/containers/MainContainer/MainContainer";
import Navbar from "src/containers/Navbar/Navbar";
import { IAppProps } from "./IAppProps";
import { IAppState } from "./IAppState";
class App extends Component<IAppProps, IAppState> {
  state = {
    title: "חיפוש רכבי אספנות",
    menus: [
      { id: 1, name: "create", title: "הוספה" },
      { id: 2, name: "search", title: "חיפוש" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Navbar menuItems={this.state.menus} />
        <MainContainer title={this.state.title} />
      </React.Fragment>
    );
  }
}
export default App;
