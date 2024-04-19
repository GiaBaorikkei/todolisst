"use strict";
/*
  kiểu dữ liệu generic <>
 */
// viết 1 function reverse các phần tử trong mảng
/*
    input : [1,2,3,4,5]
    output: [5,4,3,2,1]
    input: ["hoa","hồng","nhung"]
    output: ["nhung","hồng","hoa"]
 */
function reverse(param) {
    return param.reverse();
}
let result1 = reverse([1, 2, 3, 4, 5]);
let result2 = reverse(["hoa", "hồng", "nhung"]);
console.log("kết quả sau khi reverse", result1);
console.log("result2", result2);
/*
   Viết 1 function trả về 1 mảng chứa 2 phần tử
   input : 5,6
   output: [5,6]
   input : 5,"hoa"
   output: [5,"hoa"]
   input : "hoa","hồng"
   output : ["hoa","hồng"]
 */
function test(param1, param2) {
    return [param1, param2];
}
let test1 = test(5, 6);
let test2 = test("hoa", 5);
console.log("test1", test1);
console.log("test2", test2);
