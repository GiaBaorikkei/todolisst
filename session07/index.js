"use strict";
/*
    1. array
 */
let students = ["hoa", "hồng"];
let numbers = [5, 6, 9];
/*
    2. object

 */
let cat = {
    name: "tomy",
    height: 50,
    color: "white",
};
cat.color = "black";
/*
   3. enum
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["USER"] = 6] = "USER";
})(Role || (Role = {}));
let person = {
    name: 'minh',
    age: 20,
    role: 5
};
/*
   4. void
 */
function sayHello() {
    console.log("xin chào ptit");
    return;
}
console.log(sayHello());
function sum(a, b) {
    return a + b;
}
sum(5, "6");
/*
    5.unknown : không biết chưa biết
    cũng giống như any nhưng nó chặt hơn
    khi sử dụng phải kiểm tra
  */
function typeAny(userName) {
    if (typeof userName == "string") {
        console.log("type unknow", userName.toUpperCase());
    }
    else {
        console.log("không phải là string");
    }
}
typeAny(5);
/*
6. never
  thường dùng trong vòng lặp vô tận, không có điểm kết thúc
 */
function typeNever() {
    while (true) {
        console.log("vòng lặp tuần hoàn");
    }
}
//    typeNever();
