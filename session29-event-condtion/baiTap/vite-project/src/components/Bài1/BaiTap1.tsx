import React from 'react'

export default function BaiTap1() {
    const click = () => {
        console.log("click");
    }
  return (
    <div>
    <button onClick={click}>click me</button>
    </div>
  )
}
