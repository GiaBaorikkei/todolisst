import React, { useState } from 'react'

export default function BaiTap6() {
    const [check, setCheck] = useState<boolean>(true)
    const [valuebt, setValuebt] = useState<string>("Hiện")

    const hidden = () => {
        setCheck(!check)
        setValuebt(check ? "Hiện" : "Ẩn")
    }
      return (
    <div>
      <button onClick={hidden}>{valuebt}</button>
    </div>
  )
}
