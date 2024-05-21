import React, { useReducer } from 'react'

export default function UseReducer() {
    // đi khai báo giá trị khởi tạo 
    const initial:number = 0;
    // khởi tạo hàm reducer
    const reducer = (state=initial,action:any)=> {
        switch (action.type) {
            case "TANG":
            return state + action.payload;
            case "GIAM":
            return state - action.payload;
            default:
                return state;
        }
    }
    /*
        đối với những action có dữ liệu phức tạp thì nên tạo 1 function 
    */ 
   const action = (type:any, payload:any) => {
    return {
        type: type,
        payload: payload
    }
   }
    // dùng destructoring để hứng lấy kết quả 
    const [count, dispatch] = useReducer(reducer, initial);
    // hàm xử lí tăng
    const tang = () => {
        dispatch(action("TANG",1))
    }
    // hàm xử lí giảm
    const giam = () => {
        dispatch(action("GIAM",1))
    }
  return (
    <div>
      {/*
        là 1 hook 
        sinh ra để làm gì?
        cách dùng của nó
        1. sỉnh a để quản lí những state phức tạp
        + khi muốn quản lí state thì thường các em dùng useState (quản lí những state đơn giản thôi)
        + về bản chất những gì useState làm được thì useReducer cũng làm được nhưng nó sẽ đi những state phức tạp hơn
        2. tiền đề sau này học redux (thư viện giúp tạo ra 1 khó chứa dữ liệu)


        cách dùng của nó?
        là 1 hook để dùng 
        b1: import nó vào
        b2: useReducer();
        nhận vào 2 tham số
        1. hàm reducer
        2. giá trị khởi tạo


       */}
        <p>giá trị của biến count: {count}</p>
        <button onClick={tang}>tăng</button>
        <button onClick={giam}>giảm</button>
    </div>
  )
}
