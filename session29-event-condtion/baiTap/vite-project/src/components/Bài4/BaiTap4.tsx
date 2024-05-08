import React, { useState } from 'react'

export default function BaiTap4() {
    const [option,setOption] = useState<string>("");
    const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value);
    }
  return (
    <div>
      <h2>TỈnh / thành phố: {option}</h2>
      <select onChange={change} name="" id="">
        <option value="Hà Nội">Hà Nội</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
    </div>
  )
}
