import React, {useState} from "react";

export default function Function(){
    const [username,setUsername] = useState<string>("")
    // ham xử lý khi click vào button
    const handleClick=()=>{
        console.log('click');
    }
    // gọi hàm theo kiểu truyền hàm số
    const handleDelete= (userID:any)=>{
        console.log('userID', userID);
        
    }
    // khai báo hàm đăng ký
    const register = ()=> { 1
        console.log("đã ăn vào hàm đăng ký");
    }
    // khai báo hàm handleChange
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log("111111", e.target.value);
        setUsername(e.target.value)
    }
    return (
        <div>
            Function
            <p onClick={()=>handleDelete(5)}>hoa</p>
            <button onClick={handleClick}>click</button> <br />
            <label htmlFor="">username</label>
            <input
            onChange={handleChange}
             type="text" /> <br />
             <button onClick={register}>register</button>
        </div>
    )
}