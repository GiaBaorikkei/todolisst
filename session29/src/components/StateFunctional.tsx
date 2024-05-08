import React, { useState } from 'react'

export default function StateFunctional() {
    const [number,setNumber] = useState<number>(1);
    //khi dùng useState bắt buộc phải khai báo
    const [fullName,setFullname]=useState<string>("minh thu");
    // hàm useState trả về 1 mảng bên trong mảng có 2 giá trị 
    // 1 là giá trị 1, 2 là một hàm xửa lí

    //khai báo hàm
    const handleClick=()=>{
        setNumber(number+1);

    }
  return (
    <div>StateFunctional
        {/**
         * 
         * React ra đời năm 2013
         * trước đó trong function không quản lý state đc mà chỉ quản lý 
         * state đc ở bên trong class
         * năm tháng 10/2018 : hook ra đời bổ sung cho functional có thể quả lý state được
         * hook: useState;
         * 
         */}
         <p>Giá trị number ban đầu: {number}</p>
         <button onClick={handleClick}>tăng</button>
         <p>xin chào {fullName}</p>
    </div>
  )
}
let number=[4,5];
// destoring đối với array
let [a,b] = number