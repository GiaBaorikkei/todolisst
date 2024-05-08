import React, { Component } from 'react'

interface ClassComponent{
    name:string,
    address: string,
    age:number,
    count:number,
}

export default class StateClass extends Component<any,ClassComponent> {
    constructor(props:ClassComponent){
        super(props)
        this.state={
            name: "hoa",
            address: "Hà Nội",
            age:25,
            count:1,
        }
    }

    // nơi khai báo phương thức
    // khi muốn câp nhật state ở bên trong 
    handleClick=()=>{
      this.setState({
        count:this.state.count+1
      })
    }
  render() {
    return (
      <div>StateClass
        <p>Cin chào {this.state.name}</p>
        <p>giá trị count ban đầu {this.state.count}</p>
        <button onClick={this.handleClick}>tăng</button>
      </div>
    )
  }
}
