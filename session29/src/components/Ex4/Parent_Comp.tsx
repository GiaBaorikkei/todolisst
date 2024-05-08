import React from 'react'
import Children_Comp from './Children_Comp'

export default function Parent_Comp() {
  const fullName: string = "Dương Hiệp"
  return (
    <div>
      <p>Bên cha: {fullName}</p>
      <Children_Comp name={fullName}></Children_Comp>
    </div>
  )
}