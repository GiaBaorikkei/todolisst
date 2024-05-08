import React, { useState } from 'react'

export default function BaiTap10() {
    var array : string[] = ["nam", "nữ", "khác"];
    const [count, setCount] = useState<number>(0)
    const [gender, setGender] = useState<string>("nam");

    const handleClick = () => {
    setCount(count+1)
        setGender(array[count])
    }
  return (
    <div>
      <p>Sau khai click lần: {count}</p>
      <h3>Gender: {gender}</h3>
      <button onClick={handleClick}>Random Gender</button>
    </div>
  )
}
