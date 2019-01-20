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


 //使用解构赋值从对象中分配变量
 const AVG_TEMPERATURES = {
     today: 77.5,
     tomorrow: 79
 };

 function getTempOfTmrw(avgTemperatures) {
     "use strict";

     const {tomorrow : tempOfTomorrow} = avgTemperatures;
     return tempOfTomorrow;
 }

 //内嵌的解构赋值
 const LOCAL_FORECAST = {
     today: { min: 72, max: 83 },
     tomorrow: { min: 73.3, max: 84.6 }
 };

 function getMaxOfTmrw(forecast) {
     "use strict";

     const { tomorrow : {max : maxOfTomorrow}} = forecast;
     return maxOfTomorrow;
 }

 //使用重构分配应用于数组
 let a = 8, b = 6;
 (() => {
     "use strict";

     [b, a] = [a, b];

 })();


 //use destructuring assignment with rest operator to reassign array elements
 const source = [1,2,3,4,5,6,7,8,9,10];
 function removeFirstTwo(list) {
     "use strict";

     const [a, b, ...arr] = list;

     return arr;
 }
 const arr = removeFirstTwo(source);
 console.log(arr); // should be [3,4,5,6,7,8,9,10]
 console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


 //use destructuring assigment to pass an object as a Function's parameters
 const stats = {
     max: 56.78,
     standard_deviation: 4.34,
     median: 34.54,
     mode: 23.87,
     min: -0.75,
     average: 35.85
 };
 const half = (function() {
     "use strict";

     return function half({min, max}) {

         return (max + min) / 2.0;
     };


 })();
 console.log(stats); // should be object
 console.log(half(stats)); // should be 28.015


 //create strings using template literals
 const result = {
     success: ["max-length", "no-amd", "prefer-arrow-functions"],
     failure: ["no-var", "var-on-top", "linebreak"],
     skipped: ["id-blacklist", "no-dup-keys"]
 };
 function makeList(arr) {
     "use strict";


     const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`,
         `<li class="text-warning">${arr[1]}</li>`,
         `<li class="text-warning">${arr[2]}</li>`]


     return resultDisplayArray;
 }
 /**
  * makeList(result.failure) should return:
  * [ `<li class="text-warning">no-var</li>`,
  *   `<li class="text-warning">var-on-top</li>`,
  *   `<li class="text-warning">linebreak</li>` ]
  **/
 const resultDisplayArray = makeList(result.failure);


 //write concise object literal declarations using simple fields
 const createPerson = (name, age, gender) => ({name, age, gender});
 console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object


 //write concise declarative functions with ES6
 const bicycle = {
     gear: 2,
     setGear(newGear) {
         "use strict";
         this.gear = newGear;
     }
 };
 bicycle.setGear(3);
 console.log(bicycle.gear);


 //use class syntax to define a constructor function
 function makeClass() {
     "use strict";
     class Vegetable {
         constructor(name){
             this.name = name;
         }
     }

     return Vegetable;
 }
 const Vegetable = makeClass();
 const carrot = new Vegetable('carrot');
 console.log(carrot.name); // => should be 'carrot'


// use getters and setters to control access to an object
 function makeClass() {
     "use strict";
     /* Alter code below this line */

     class Thermostat{
         constructor(farenheit){
             this.farenheit = farenheit;
         }
         get temperature(){
             return 5 / 9 * (this.farenheit - 32);
         }
         set temperature(celsius){
             this.farenheit = celsius * 9.0 / 5 + 32;
         }
     }

     /* Alter code above this line */
     return Thermostat;
 }


 //create an export fallback with export default
 export default function subtract(x,y) {return x - y;}


 //import a default export
 "use strict";
 import subtract from "math_functions";
 subtract(7,4);