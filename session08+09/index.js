"use strict";
// để kiểm tra kiểu dữ liệu thì dùng typeof
//kiểu dữ liệu của array: object
// làm sao phân biệt array và object
/*
    dùng typeof không giải quyết vấn đề được
    vì  typeof của array và object đều là object


 */
let numbers1 = [5, 6, 8,];
console.log("typeof numbers1", typeof (numbers1));
let text1 = "hello";
text1 = 5;
// viết function tính tổng 2 số a và b và trả về kết quả
let arr1 = ["5", "hoa"];
arr1.push(1);
let arr2 = [1, "hoa"];
arr2.push(6);
console.log(11111111, arr2);
let test1 = "";
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
console.log(ourTuple);
const car = {
    year: 2024,
    type: "a",
    model: "toyota",
};
let c1 = {
    name: "minh thu",
    address: "hn",
    id: 5
};
console.log("1111,", c1);
