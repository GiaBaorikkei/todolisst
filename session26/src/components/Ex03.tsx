import React, { Component } from 'react'

export default class Ex03 extends Component {
    public state;
    constructor(){

        super();
        this.state={
            name:"Nguyễn Văn A",
            gender:"Nam",
            birthday:"06/03/2024",
            email:"nva@gmail.com",
            address:"Thanh Xuân, Hà Nội"

        }
    }
  render() {
    return (
      <div>Ex03
        <ul>
            <h4>Thông tin cá nhân</h4>
            <li>Họ và tên: <b>{this.state.name}     </b></li>
            <li>Giới tính: <b>{this.state.gender}     </b></li>
            <li>Ngày sinh: <b>{this.state.birthday}     </b></li>
            <li>Email:<b> {this.state.email}    </b></li>
            <li>Địa chỉ:<b> {this.state.address}   </b></li>
        </ul>
      </div>
    )
  }
}
