
/* 
    1. array
 */
let students :string[]=["hoa","hồng"];

let numbers :Array<number>=[5,6,9];
/* 
    2. object

 */
 let cat:{name:string,height:number,color:string}={
    name:"tomy",
    height:50,
    color:"white",
 }
 cat.color="black";
 /* 
    3. enum
  */
 enum Role{
    ADMIN=5,
    USER,
 }
 let person:{name:string,age:number,role:Role.ADMIN}={
    name:'minh',
    age:20,
    role:5
 }
 /* 
    4. void
  */
  function sayHello():void {
    console.log("xin chào ptit");
    return

  }
console.log(sayHello());
function sum(a:number,b:string):string {
    return a+b;
}
sum(5,"6");
/*
    5.unknown : không biết chưa biết 
    cũng giống như any nhưng nó chặt hơn
    khi sử dụng phải kiểm tra
  */
  function typeAny(userName:unknown):void {
    if(typeof userName =="string"){
        console.log("type unknow",userName.toUpperCase());
    }else{
     console.log("không phải là string");     
    }
  }
  typeAny(5);
  /* 
  6. never 
    thường dùng trong vòng lặp vô tận, không có điểm kết thúc
   */
   function typeNever():never{
        while(true){
            console.log("vòng lặp tuần hoàn");  
        }
   }
//    typeNever();