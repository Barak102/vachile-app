import React, { Component } from 'react';
import { ITextInputProps } from './ITextInputProps';
import { ITextInputState } from './ITextInputState';
import "./TextInput.scss";
export default class TextInput extends Component<ITextInputProps, ITextInputState> {


  constructor(props: ITextInputProps) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div className="text-input-wrapper">
        <div className="field">
          <div className="title">{this.props.title}</div>
          <div className="field-item">
            <input type="text" name={this.props.name} placeholder={this.props.placeHolder} value={this.state.value}
              onChange={(e: any) =>
                this.setState({ value: e.target.value.toString() })
              } />
            {this.state.value}
          </div>
        </div>
      </div>
    )
  }
}
