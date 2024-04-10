"use strict";
/*
    các cách tạo đối tượng trong js
    1. let,const,var_ tên đối tượng ={}
    2. dùng new Object()
    3.
        tạo hàm tạo constructor
        function Student (name){
            this.name=name
        }
        let std1= new Student("minh");
        // đây mới là đi tạo đối  tượng
    4.
        tạo class
        class Person{
            constructor(name,age,address){
                this.name=name;
                this.age=age;
                this.address=address
            }
        }
        let std1= new Person("hoa",20,"hà nội");
        // đây mới là tạo đối tượng std1 thông qua từ khóa new
        1. đối tượng sẽ gồm 2 thành phần
         + thuộc tính (property)
         + phương thức (hành vi method)
         OOP: gồm 4 tính chất
         1. tính đóng gói (encapsulation)
            + che giấu thông tin của đối tượng
            ==> nhằm giúp cho các truy cập đến tượng được bảo mật hơn
         2. tính trừu tượng (abstraction)
         3. tính kế thừa (inheritance)
         4. tính đa hình ( polymorphism)
 */
class Person {
    constructor(name, age, firstName, lastName, address) {
        this.name1 = name;
        this.age1 = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    // nơi khai báo những mothod
    // ví dụ khai báo 1 phương thức show thông tin của user
    showInfo() {
        console.log("xin chào", this.firstName + this.lastName);
    }
    showName() {
        console.log("xin chào", this.name1);
    }
    getAge() {
        return this.age1;
    }
    setAge(age) {
        this.age1 = age;
    }
    // getter
    get address1() {
        return this.address;
    }
    //setter
    set address1(address) {
        this.address = address;
    }
}
let std1 = new Person("minh thu", 20, "minh", "thu", "hà nội");
// std1: được gọi là 1 instance của class Person
console.log("std1", std1);
// gọi phương thức
std1.showInfo();
// tính đóng gói : encapsulation
// access modifier -phạm vi truy cập
/*
    1. public
    2. private
    3. proceted liên quan đến kế thừa
    - khi class con kế thừa class cha thì class con sẽ có
    các thuộc tính và phương thức của class cha
    - khi phạm vi truy cập proceted thì class con không truy cập được thuộc tính
    của class cha
 */
std1.name1 = "minh hoàng";
std1.showName();
// đi set tuổi minh thu
std1.setAge(22);
// console.log(std1.getAge());
// console.log(std1.address1);
// đi thay đổi địa chỉ thông qua phương thức setter
std1.address1 = "sài gòn";
// hiển thị địa chỉ
console.log(std1.address1);
