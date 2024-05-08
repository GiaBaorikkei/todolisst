import React, { Component } from 'react'

interface UserInfo {
  id: number,
  name: string,
  date: string,
  address: string
}

export default class Exercise02 extends Component<any, UserInfo> {
  constructor(props: UserInfo) {
    super(props)
    this.state = {
      id: 1,
      name: "Dương Hiệp",
      date: "04/09/2005",
      address: "Thanh Oai Hà Nội"
    }
  }

  render() {
    return (
      <div>
        <h2>Thông Tin Cá Nhân</h2>
        <p>id: {this.state.id}</p>
        <p>Tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.date}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    )
  }
}