
/* 
    Trang trí cho phương thức 
    phương thức và hàm khác nhau như thế nào?
    hàm là những function tự định nghĩa
    phương thức dùng trong đối tượng hoặc lớp
    map, filter, forEach là hàm hay phương thức.
    ==> để dùng decorator cho function 
    thì phải dùng @ đặt trước tên phương thức


 */

    // tạo function decor cho function sum trong class Test
    // function decor phải có 3 đối số
    function decorMethodSum(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        console.log(1111111,target);
        console.log(222222, propertyKey);
        console.log(33333, descriptor);
        // trong desctiptor có chứa 1 đối tượng có chứa thuộc tính value
        // nhờ cái value thì mới đi decor cho mothod được
        descriptor.value=function (a:number,b:number):number {
            return (a+b)*2
        }

    }
    class Test {
        // viết phương thức cho class Test
        // tạo function tính tổng
        // đặt decorator
        @decorMethodSum
        sum1(a: number, b: number) {
            return a + b;
        }
    }
    let sum1= new Test();
    console.log(444444,sum1.sum1(1,2));
    /* 
        Còn 3 cái: 
        decorator: 
        với accessor : 1,2,3
        với param    : 4,5,6
        với property :  7,8
        
     */

    