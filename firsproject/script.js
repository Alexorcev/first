'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'+9);

let persone ={
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[2]);


/* alert('Hello world'); */

let answer = confirm('Are you here?');

console.log(answer);

let age = prompt('Есть ли вам 18?', "Да");

console.log(typeof(answer));

/* ----------------операторы------------------- */
console.log("arr" + " - object" );

let incr = 10,
    decr = 10;

console.log(++incr);   /* префикс */
console.log(decr++);   /* постфикс */

console.log(5%2);
console.log("2" == 2);   /*  = присваивание , == сравнение, === сравнение по типу данных */

let isCheked = true,
    isClose = true;

console.log(isCheked && isClose); /* && оперотор "и" все значения должны быть правливы */

console.log(isCheked || isClose); /* || оператор "или" одно из значений должно быть правдиво */
