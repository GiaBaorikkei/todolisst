import React, { useState } from 'react'

export default function BaiTap5() {
    const [check, setCheck] = useState<boolean>(true)

    const hidden = () => {
        setCheck (!check)
    }
  return (
    <div>
      <button onClick={hidden}>{check ? "Hiện" : "Ẩn"}</button>
    </div>
  )
}
