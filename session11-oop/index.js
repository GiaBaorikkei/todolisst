"use strict";
console.log("inheritance!");
class Parent {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    sayHello() {
        console.log(`hello ${this.userName}`);
    }
}
// cha muốn gọi phương thức thì làm thế nào?
// class con muốn kế thừa class cha thì bắt buộc phải dùng từ khóa extend(kế thừa)
class Child extends Parent {
    constructor(a, b, address) {
        super(a, b);
        this.userName = a;
        this.password = b;
        this.address = address;
    }
    sayGoodbye() {
        console.log("tạm biệt");
        return "tạm biệt";
    }
}
let child1 = new Child("minh", "123", "hà nội");
child1.sayHello();
class Child1 extends Child {
    constructor(userName, password, address) {
        super(userName, password, address);
        this.userName = userName;
        this.password = password;
        this.address = address;
    }
    // override : ghi đè phương thức
    sayGoodbye() {
        console.log(1111111, super.sayGoodbye());
        return "1";
    }
}
let child11 = new Child1("hồng", "111", "hcm");
child11.sayHello();
child11.sayGoodbye();
class B {
    constructor(name) {
        this.name33 = name;
    }
}
console.log(111111222);
let userName = ["hoa", "hoa", "hồng"];
console.log(userName);
