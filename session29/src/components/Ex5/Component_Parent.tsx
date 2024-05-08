import React from 'react'
import Component_Children from './Component_Children'

export default function Component_Parent() {
    const product = {
        id: 1001,
        name: "Tai nghe gaming",
        price: "300.000 vnđ",
        quantity: 20,
    }
  return (
    <div>
        <Component_Children product={product}></Component_Children>
    </div>
  )
}