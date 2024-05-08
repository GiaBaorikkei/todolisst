import React from 'react'

export default function Functional() {
  let age: number = 18;
  let fullName: string = "ngọc nguyễn";
  let myArrr: string[]=["nguyễn","thạch","kim","ngọc"]
  type Obj={
    name:string,
    age:number,
    address:string
  }
  let newStudent={
    name:"Ngoc",
    age:18,
    address:"hà nội"
  }
  return (
    <>
        Functional
        <p>Xin chào {fullName}</p>
        <p>Năm nay {fullName} {age} tuổi</p>
        <ul>
            {myArrr.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </>
  )
}
