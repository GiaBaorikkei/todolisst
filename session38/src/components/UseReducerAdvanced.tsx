import React, { useReducer } from 'react'
interface Todo{
    id:number,
    name:string,
    status:boolean,
}
export default function UseReducerAdvanced() {
    /*
    thực hành làm todoList dùng useReducer

    */
   const initial={
    todos:[],
    isloading:false,
    todo:{
        id:0,
        name:"",
        status:false,
    },
   }
   //khoi tạo hàm tạo action
   const action=(type:string,payload:any)=>{
        return{
            type:type,
            payload:payload,
        }
   }
   //khởi tạo hàm reducer
   const reducer = (state:any=initial,action:any)=>{
    switch (action.type) {//bởi vì action hiên tại đang là 1 obj muốn truy cập vào phải dùng dấu .
        case "CHANGE_INPUT":  
            return {...state,todo:{...state.todo,name:action.payload}}
        case "ADD_TODO":
            // state.todos.push(action.payload)            
            return {...state,todos:[...state.todos,{...action.payload,id:Math.floor(Math.random() *9999999+new Date().getMilliseconds())}]}
        default:
            return state;
    }
   }
   const [state,dispatch]=useReducer(reducer,initial);
   //ham lay gia tri o input
   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    let inputValue=e.target.value;    
    dispatch(action("CHANGE_INPUT",inputValue))
    }
    //ham them viec
    const addTodo=()=>{
        dispatch(action("ADD_TODO",state.todo))
    }
  return (
    <div>UseReducerAdvanced
        <input 
        onChange={handleChange}
        type="text" />
        <button onClick={addTodo}>them cong viec</button>
        <p>danh sach cong viec</p>
        {
            state.todos.map((item:Todo,index:number)=>{
                return <li key={index}>{item.name}</li>
            })
        }
    </div>
  )
}