import React, { useState } from 'react'

export default function BaiTap8() {
    const [countclick, setCountclick] = useState<number>(0)
    const click = () => {
        setCountclick(countclick+1)
    }
  return (
    <div>
      <button onClick={click}>Click {countclick} lần</button>
    </div>
  )
}
