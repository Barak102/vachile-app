import React, { Component } from "react";
import "./App.scss";
import MainContainer from "../containers/MainContainer/MainContainer";
import Navbar from "../containers/Navbar/Navbar";
class App extends Component {
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
