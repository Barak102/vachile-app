import React, { Component } from 'react';
import { ITextInputProps } from './ITextInputProps';
import { ITextInputState } from './ITextInputState';
import "./TextInput.scss";
export default class TextInput extends Component<ITextInputProps, ITextInputState> {


  constructor(props: ITextInputProps) {
    super(props);
  }

  render() {
    return (
      <div className="text-input-wrapper">
        <div className="field">
          <div className="title">{this.props.title}</div>
          <div className="field-item">
            <input type="text" name={this.props.name} placeholder={this.props.placeHolder} value={this.props.value ? this.props.value : ''}
              onChange={(e: any) =>
                this.props.valueChanged(this.props.name, e.target.value.toString())
              } />
            {this.props.value}
          </div>
        </div>
      </div>
    )
  }
}
