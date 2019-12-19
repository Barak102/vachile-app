// @flow

import React, { Component } from "react";
import "./Navbar.scss";
import { INavbarProps } from "./INavbarProps";

export default class Navbar extends Component<INavbarProps> {
  constructor(props: INavbarProps) {
    super(props);
    this.state = {
      menuItems: []
    };
  }

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
