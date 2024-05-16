import React, { useState } from 'react'

export default function UseState() {
  // cú pháp destructoring
  const [name, setName] = useState<string>("minh thu");
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count+1)
  }
  return (
    <div>
      {/* 
        useState = use + state (sử dụng trạng thái)
        trạng thái của dữ liệu ức là khi dữ liệu thay đổi thì giao diện nó thay đổi
        theo
        các hook là các phương thức  được React cung cấp cho nên khi sử dụng các em phải import để dùng 
        bản chất useState là 1 function trả về một mảng có 2 phần tử
        "minh thu" ko được gọi là giá trị khởi tạo (initial value)
        khi setCount thì component re-render lại
        - khi có nhiều useState giống nhau  
      */}
      <p>Giá trị biến count: {count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
