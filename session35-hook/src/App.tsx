import React from 'react'
import UseState from './components/UseState'

export default function App() {
  return (
    <div>
      App - React - Hook
      {/* 
        Hook: móc
        react hook bản chất là những cái hàm, phương thức giúp cho function component
        có thể thực hiện các tính năng y hệt như class component
        + react hook được ra đời ở phiên bản react 16.8 (2018)
        + trước khi hook ra đời thì function component chỉ đơn giản là tạo ra các UI (giao diện)
        function Header (){
          return <>header</>
        }
        + hook ra đời giúp cho code ngắn dễ sử dụng  hơn so với class component
        + dự án bây giờ đa phần sử dụng react hook
        + sau này đi làm có những dự án vẫn đang dùng calss (maintain - chỉnh sửa)
        + khi làm việc với class thì phải lifecycle
        + react hook chỉ sử dụng function component
        + khi làm việc với các hook phải để ý đến đầu vào , đầu ra của các phương thức
        + các hook học:
         - useState
         - useEffect
         - useRef
         - useMemo
         - useReducer
         - useCallback
       */}
       <UseState></UseState>
    </div>
  )
}
