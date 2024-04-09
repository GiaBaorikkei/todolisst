// để kiểm tra kiểu dữ liệu thì dùng typeof
//kiểu dữ liệu của array: object
// làm sao phân biệt array và object
/* 
    dùng typeof không giải quyết vấn đề được
    vì  typeof của array và object đều là object


 */
let numbers1: number[]=[5,6,8,];
console.log("typeof numbers1",typeof(numbers1));
let text1: string|number = "hello";
text1=5;
// viết function tính tổng 2 số a và b và trả về kết quả
let arr1:(number|string)[]=["5","hoa"];
arr1.push(1)
let arr2:[number,string]=[1,"hoa"];
arr2.push(6);
console.log(11111111,arr2);

type Test=string|number|null|undefined;

let test1: Test="";

// define our tuple
let ourTuple:  readonly [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
console.log(ourTuple);

type Car = {
    year: number;
    type: string
    model: string;
};

const car: Car = {
    year: 2024,
    type: "a",
    model: "toyota",
}
// console.log(1||null&&6);
// tính từ trái qua phải gặp falsy lấy không có lấy cuối cùng
//falsy: 0 null false undefined "" '' NaN
/* 
    intersection : giao nhau 
 */
type A={
    name:string
}
type B = {
    name:string,
    address:string,
    id:number
};
type C=A&B;// intersection
let c1:C={
    name:"minh thu",
    address:"hn",
    id:5
}
console.log("1111,",c1);



