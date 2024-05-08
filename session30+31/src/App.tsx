import React from 'react'
import Exercise01 from './components/BaiTap/Ex01/Exersice01'
import Notification from './components/BaiTap/Ex02/Notification'
import Reacts from './components/BaiTap/Ex03/Reacts'
import Ex04 from './components/BaiTap/Ex04/Ex04'
import Ex055 from './components/BaiTap/Ex05/Ex05'
import Ex05Child from './components/BaiTap/Ex05/Ex05Child'
import Ex06 from './components/BaiTap/Ex06/Ex06'
import Ex06Child from './components/BaiTap/Ex06/Ex06Child'


export default function App() {
  return (
    <div>
      <Exercise01></Exercise01>
      <Notification></Notification>
      <Reacts></Reacts>
      <Ex04></Ex04>
      <Ex055></Ex055>
      <Ex05Child></Ex05Child>
      <Ex06></Ex06>
      <Ex06Child></Ex06Child>
    </div>
  )
}