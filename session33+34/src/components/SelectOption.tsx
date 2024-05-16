import React, { useState } from 'react'

export default function SelectOption() {
    const [select, setSelect] = useState<string>("");
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value);
    }
    console.log("giá trị được chon", select);
    
  return (
    <div>
      <select onChange={handleChange} name="" id="">
        <option value="">Nam</option>
        <option value="">Nữ</option>
        <option value="">Khác</option>
      </select>
    </div>
  )
}
