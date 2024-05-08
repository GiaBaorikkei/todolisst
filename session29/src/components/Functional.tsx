import React from 'react'

interface Props{
    name:string,
    students:string[],
}
export default function Fuctional(props:Props) {
    console.log("1111111",props);
    const {name}=props;
    const {students} = props;
  return (
    <div>Fuctional
        <p>Xin chào {name}</p>
        <ul>
          {students.map((item,index)=>{
            return <li key={index}>{item}</li>
          })


          }
        </ul>
    </div>
  )
}
