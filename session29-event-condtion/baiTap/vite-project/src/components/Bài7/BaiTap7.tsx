import React, { useState } from 'react'

export default function BaiTap7() {
    const [array, setArray] = useState<number[]>([])
    const click = () => {
        const newArray = [...array, Math.floor(Math.random()*10+1)]
        setArray(newArray)
    }
  return (
    <div>
      <h2>Mảng số: [{array.join(",")}]</h2>
      <button onClick={click}>add element</button>
    </div>
  )
}
