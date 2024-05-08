import React from 'react';
import Children01 from './Children01';

export default function Parent01() {
    const users = [
        {
            id: 1001,
            name: "Dương Hiệp",
            address: "Hà Nội",
            email: "hiepduong0409@gmail.com",
        },
        {
            id: 1002,
            name: "Hoàng Long",
            address: "Thanh Hóa",
            email: "hoanglong0503@gmail.com",
        },
    ];

  return (
    <div>
        <Children01 users={users} />
    </div>
  )
}