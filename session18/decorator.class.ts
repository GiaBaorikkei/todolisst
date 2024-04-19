/* 
    dùng để bổ sung, thay đổi thuộc tính,phương thức cho đối tượng
    cú pháp : @
 */

    // function decotor để thêm thuộc tính
    function decoratorProperty<T extends { new (...args: any[]): {} }>(a: T) {
        return class extends a {
            address="hà nội";
            sayhello=()=>{
                console.log("hello");
            }
    };
}   @decoratorProperty
    class Student{
        userName:string;
        constructor(name:string){
            this.userName=name;
        }
    }
    // khởi tạo đối tượng student 
    let std1= new Student("minh thu");
    // thầy muốn đi thêm thuộc tính age cho đối tượng std1.
    // dùng decorator
    console.log("student",std1);
    // closure
    // biến được sử dụng trong hàm
    function tinhTong(){
        return function (a:number,b:number):number {
            return a+b
        }
    }
    let result=tinhTong()(1,2);
    console.log(111111,result);
    function closure(){
        let a=5;
    
        function test1() {
          
            console.log(222222,a);
            
        }
       
        
        
        test1()
    }
    closure();
    
    