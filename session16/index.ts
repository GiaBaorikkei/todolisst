
/* 
    viết 1 function nhận vào tham số ,nếu là số in ra số
    nếu là string in ra string

 */
 /* 
 Khi khai báo array thì có bao nhiêu cách?
 C1:
  */
 let number4:number[]=[5];
 let newNumbers :Array<number>=[6];

 /* 
    viết function nếu nhận vào  1 số a thì trả về [a], nếu nhận vào 1 cái mảng arr thì
    trả về phần tử cuối cùng của mảng  [arr[arr.length-1]];
    test(1)==>[1]
    test(arr[5,6,7,9])==>[9]
    test(arr["a","b","c"])==>[c]

  */
    type generic1= Array<number>;
    type generic2 = Array<string>;

    let generic3 =<T>(param:T)=>{
        return param;
    };

    console.log(111111,generic3(5));
    console.log(222222,generic3("5"));
    console.log(333333,generic3(null));

     function test(param: number | (number | string)[]): (number | string)[] {
         if (typeof param === "number") {
             return [param];
         } else if (Array.isArray(param)) {
             return [param[param.length - 1]];
         } else {
             return [];
         }
     }
     console.log(test(1));
     function test1<T>(param: T|T[]) {
        if(Array.isArray(param)){
            return [param[param.length-1]]
        }else{
            return  [param]
        }
     }
    console.log(22222, test1(5));
    
    console.log(33333, test1([1, 2, 3, 4, 5]));
    
    console.log(44444,test1(["a", "b", "c"]));
   


     console.log(test([1, 5, 7]));

     console.log(test(["a", "b", "c"]));
     // dùng generic để xử lý


    



