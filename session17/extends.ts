/* 
 extends trong generic
 */
// function merge (gộp,hợp nhất)
function merge  <T extends {name:string,age?:number},U>(param1:T,param2:U):T&U {
    return Object.assign(param1,param2);
}
let merge1= merge({name:"hoa"},{age:15});
console.log("merger1",merge1);
// toán tử ?? nullish 
// let result3= "hoa"??5;
// console.log("2222",result3);
// & toán tử : là intersection
// ! non null
// ? optional chain
function add(a:number,b?:number):number {
    return b?a+b:a;
}
let add1=add(1,3); //4
let add2=add(1);


/* 
    Khi khai báo kiểu dữ liệu
    type
    interface
 */
type A={
    name:string
}
interface A1 {
    name:string
}
 interface A2 extends A1{

 }
type B={
    age: number
}
let obj1:A={
    name:"hoa"
}
let obj2:A1={
    name:"minh thu"
}
// type và interface khác nhau như thế nào?
/* 
    type: 
    có thể dùng union và intersection
    không thể kế thừa được
    không thể implement bởi class
    thường khai báo kiểu dữ liệu
    interface: 
    không dùng được
    có thể kế thừa interface khác 
    có thể được implement (triển khai) bởi class
    thường khai báo các thuộc tính và phương thức
    NESTJS + typescript+ reactjs
 */
class Person implements A1{
    name:string
    constructor(name:string){
        this.name=name
    }
}
/* 
    
*/
 function test3<T extends {firstName:string,lastName:string}>(param:T){
    return {...param,fullName: param.firstName+param.lastName}
 }
 let result3= test3({firstName:"lê",lastName:"minh thu"});
 console.log(result3);
 // chuyển sang dạng generic
// đệ quy || callback
// đệ quy là hàm gọi lại chính nó
// lưu ý khi dùng đệ quy nên tránh việc hàm chạy không có điểm dừng
// ==> chạy vô tận
// dùng đệ quy tính tổng từ 1 đến 10
 function deQuy(a:number): number{
    if(a==1)
        return 1
    return a+ deQuy(--a)
 }
 /* 
    5+ 4+ 3+ 2+ 1
    dùng đệ quy để giải quyết bài toán
   input [[1,2],[3,[4,[5]]]]
   output [1,2,3,4,5]
  ==> đệ quy giải quyết bài toán
  decorator : trang trí
  */
 let result4=deQuy(5);
 console.log("tổng từ 1 đến 10 là",result4);
 



