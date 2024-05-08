import React, { useState } from 'react'
interface Login {
    email: string,
    password: string
}

export default function BaiTap9() {
    const [login, setLogin] = useState<Login>({
        email:"",
        password:""
    })
    const [check, setCheck] = useState<boolean>(false);
    const handkeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setLogin({
            ...login, [name]: value
        })
    }
    const handleClick = ()=> {
        setCheck(true)
    }
  return (
    <div>   
      <div>
        <input onChange={handkeChange} type="text" name='email' /> <br />
        <input onChange={handkeChange} type="text" name='password' />
        <button onClick={handleClick}>Submit</button>
      </div>
      <div>
        <h3>Email: {check && login.email}</h3>
        <h3>Mật khẩu: {check && login.password}</h3>
      </div>
    </div>
  )
}
