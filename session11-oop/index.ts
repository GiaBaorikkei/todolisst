console.log("inheritance!");

class Parent{
    userName:string;
    password:string;
    constructor(userName:string,password:string){
        this.userName=userName;
        this.password=password;
    }
    sayHello():void{
        console.log(`hello ${this.userName}`);
    }
}
// cha muốn gọi phương thức thì làm thế nào?
// class con muốn kế thừa class cha thì bắt buộc phải dùng từ khóa extend(kế thừa)
 class Child extends Parent{
   protected address:string;
    constructor(a:string,b:string,address:string){
        super(a,b);
        this.userName=a;
        this.password=b;
        this.address=address;
    }
    sayGoodbye():string{
        console.log("tạm biệt"); 
        return "tạm biệt"
    }
 }
 let child1= new Child("minh","123","hà nội");
 child1.sayHello();
 class Child1 extends Child{
    constructor(userName:string,password:string,address:string){
        super(userName,password,address)
        this.userName=userName;
        this.password=password;
        this.address=address;
    }
    // override : ghi đè phương thức
    
     sayGoodbye(): string {
        console.log(1111111,super.sayGoodbye());
        return "1"
    }
 }
 let child11= new Child1("hồng","111","hcm");
 child11.sayHello();
 child11.sayGoodbye();
class B{
    name33:string;
    constructor(name:string){
        this.name33=name;
    }
}

console.log(111111222,);

let userName:[string,string,string]=["hoa","hoa","hồng"];
console.log(userName);


