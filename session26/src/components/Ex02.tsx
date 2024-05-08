import React, { Component } from 'react'

export default class Ex02 extends Component {
  public state;
  constructor(){
    super();
    this.state={
        number: 10
    }

  }
  render() {
    return (
      <div>Ex02

        <ul>
            <h3>Danh sách kết quả:</h3>
            <li>{this.state.number} + {this.state.number} = {this.state.number+this.state.number}</li>
            <li>{this.state.number} - {this.state.number} = {this.state.number-this.state.number}</li>
            <li>{this.state.number} * {this.state.number} = {this.state.number*this.state.number}</li>
            <li>{this.state.number} / {this.state.number} = {this.state.number/this.state.number}</li>
           
           
        </ul>
      </div>
    )
  }
}
