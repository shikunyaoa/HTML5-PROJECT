 // 使用let声明变量,变量储存该作用域中的值
function checkScope(str) {
    "use strict"
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("Block scope i is:", i);
    }
    console.log("Function scope i is:", i);
    return i;
}

//使用const定义常量（常量需要全部大写）或者数组
 const s = [5, 7, 2];
 function editInPlace() {
     "use strict";
     s[0] = 2;
     s[1] = 5;
     s[2] = 7;

 }

 //使用Object.freeze阻止对象的改变
 function freezeObj() {
     "use strict";
     const MATH_CONSTANTS = {
         PI: 3.14
     };

     Object.freeze(MATH_CONSTANTS);


     try {
         MATH_CONSTANTS.PI = 99;
     } catch( ex ) {
         console.log(ex);
     }
     return MATH_CONSTANTS.PI;
 }


 //使用=> 来简化匿名函数
 //当只有一个返回值的时候可以省略大括号
 const magic = () => new Date();

 //带参数的匿名函数
 const myConcat = (arr1, arr2) => arr1.concat(arr2);

 //使用其他函数作为参数
 const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
 const squareList = (arr) => {
     "use strict";
     const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0).map( (num) => Math.pow(num, 2));
     return squaredIntegers;
 };


 //使用默认值作为参数
 const increment = (function() {
     "use strict";
     return function increment(number, value = 1) {
         return number + value;
     };
 })();


 //使用展开操作符，传递数据
 const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
 let arr2;
 (function() {
     "use strict";
     arr2 = [...arr1];
 })();
