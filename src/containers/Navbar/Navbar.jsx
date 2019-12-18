import React, { Component } from "react";
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="flexCenter navbar-wrapper">
        <ul>
          {this.props.menuItems.map(m => (
            <li key={m.id} className="inline-item">
              {m.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
