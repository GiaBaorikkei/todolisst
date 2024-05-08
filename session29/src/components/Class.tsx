import React, { Component } from 'react'

interface ClassComponent{
    age:number,
    numbers:number[],
}

export default class Class extends Component<ClassComponent> {
   
  render() {
    //  const {age} = this.props
    return (
      <div>Class
        <p>năm nay minh thu {this.props.age} tuổi</p>
        <ul>
            {this.props.numbers.map((item,index)=>{
                return <li key = {index}>{item}</li>
            })}
        </ul>
      </div>
    )
  }
}
