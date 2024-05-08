import React from 'react'
import Functional from './components/Functional.tsx';
import Class from "./components/Class.tsx"
import StateClass from './components/StateClass.tsx';
import StateFunctional from './components/StateFunctional.tsx';
import Exercises01 from './components/Ex1/Exercises01'
import Exercise02 from './components/Ex2/Exercise02'
import Exercise03 from './components/Ex3/Exercise03'
import Parent_Comp from './components/Ex4/Parent_Comp'
import Component_Parent from './components/Ex5/Component_Parent'
import Parent01 from './components/Ex6/Parent01'
import ListPost from './components/Ex7/ListPost'
import ListProduct from './components/Ex8/ListProduct'
import Status from './components/Ex9/Status'

export default function App() {
  const fullName: string = "rikkei education";
  const students: string[] = ["thu", "hoa", "ngọc"];
  const numbers: number[] = [5,6,7,8,9]
  const age:number =25;
  return (
    <div>App
      {/*
        Props và state
        1. props : properties
         dùng để truyền dữ liệu từ component cha sang component con 
         thế nào được gọi là component cha
        2. state:
         - dùng để quản lý dữ liệu bên trong component
      */}
      <Functional name={fullName} students={students}></Functional>
      <Class age={age} numbers={numbers}></Class>
      <StateClass></StateClass>
      <StateFunctional></StateFunctional>
       
      <h3>Ex1:</h3>
      <Exercises01></Exercises01>
      <h3>Ex2:</h3>
      <Exercise02></Exercise02>
      <h3>Ex3:</h3>
      <Exercise03></Exercise03>
      <h3>Ex4:</h3>
      <Parent_Comp></Parent_Comp>
      <h3>Ex5:</h3>
      <Component_Parent></Component_Parent>
      <h3>Ex6:</h3>
      <Parent01></Parent01>
      <h3>Ex7:</h3>
      <ListPost></ListPost>
      <h3>Ex8:</h3>
      <ListProduct></ListProduct>
      <h3>Ex9:</h3>
      <Status></Status>
    </div>
  )
}
