import React, { useState } from 'react'

export default function HoverEffect() {
    const [hover, setHover] = useState<boolean>(false);
    const dropdown = () => {
        setHover();
    }
  return (
    <div>
      <button onMouseMove={dropdown}>hover me</button>
    </div>
  )
}
