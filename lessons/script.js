'use strict';
//start my training.
// console.log(1); 

// let number = 5;
// const leftBorderWidth = 1;

// console.log(3/0); //infinity
// console.log('string' * 9);                  //NaN -  not a number

// let und;
// console.log(und); //undefined

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);
// const answer = +prompt('You have 18 old?', '18');        // prompt always return !!!type string!!!  
// + unar plus change type on a number
// console.log(answer+5);

// const answers = [];
// answers[0] = prompt('What your name?', '');
// answers[1] = prompt('What your lastName?', '');
// answers[2] = prompt('What your old?', '');

// document.write(answers);
// console.log(typeof(null));

//intopolation

// const category = 'toys';
// console.log('https://someurl.com/' + category);
// console.log(`https://someurl.com/${category}/5`);

// const user = 'alex';
// alert(`Hello ${user}`);

//Operators

// console.log('arr' + ' - Object');
// console.log(4 + ' - Object');

// let incr = 10,
//     decr = 10;

//     ++incr;//11
//     --decr;//9
// console.log(incr++);//11
// console.log(decr++);//9

// if else switch

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }

//  const num = 50;
// if(num <49){
//     console.log('error');
// }
// else if( num >100){
//     console.log('many');
// }else{
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// switch(num){
//     case 49:
//         console.log('none');
//         break;
//     case 100:
//         console.log('none');
//         break;
//     case 50:
//         console.log('ok');
//         break;
//     default:
//         break;
// }
// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = i; j < 5; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     console.log(result);
//     result = '';
// }

//functions
// showFirstMessage('Hello World');

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
// }

// const logger = function () {
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) => {return a+ b};
// const calc1 = a => a;
// const calc2 = (a, b) => a+ b;

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount,curr){
//     return curr * amount;
// }

// function promotion (result) {
//     console.log(result * discount);
// }

// const res = convert(500,usdCurr); 
// promotion(res);

// function test() {
//     for(let i =0; i<5;i++){
//         console.log(i);
//         if(i===3) return
//     }
//     console.log('done');
// }

// test();  

// function doNothing() {};
// console.log(doNothing() === undefined);

// function getMathResult(a,b) {
//     let res = a;
//     const c =a;
//     if(typeof(b)!='number'||b<=0){
//         return a;
//     }else{
//         for(let i = 1;i<b;i++){
//         a+=c;
//         res+='---'+a;
//     }
//     return res;
//     }

// }

// console.log(getMathResult(2,'fas'));
//String
// const str = 'test';
// console.log(str.length);
// console.log(str[1]);

// let fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';
// console.log(logg.slice(6, 11)); //world
// console.log(logg.substring(6, 11)); //world
// console.log(logg.substr(6, 5)); //world

//Numbers
// const num = 12.2;
// console.log(Math.round(num)); // 12

// const test = '12.2px';
// console.log(parseInt(test)); // 12
// console.log(parseFloat(test)); // 12.2

// function getTimeFromMinutes(minutes) {
//     const hour = parseInt(minutes/60);
//     const min = parseInt(minutes%60);
//     if(minutes <0 || !Number.isInteger(minutes)){
//         return '????????????, ?????????????????? ????????????';
//     }
//     if(hour === 0 || hour ===1 ){
//             return `?????? ${hour} ?????????? ?? ${mim} ??????????`;
//         }
//         else{
//             return `?????? ${hour} ???????? ?? ${min} ??????????`;
//         }

// }

// getTimeFromMinutes(300);

//NUMBER FIBINACHI!!!

// function fib(number) {
//     let res = '',
//         now =1,
//         result = 0,
//         before= 1;

//     if(typeof(number) != 'number'||!Number.isInteger(number)){
//         return res;
//     }
//     if (number == 1) {
//         res += '0';
//     } else if (number == 2){
//         res  = '0 1';
//     }else if (number == 3){
//         res = "0 1 1";
//     }
//     else if(number >3){
//         res = "0 1 1";
//         for (let i = 3; i < number; i++) {
//             if(result<now){
//                 result = now+before;
//                 res+=' ' + result;
//             }else if(before<result){
//                 before = result+now;
//                 res+=' ' + before;
//             }else if(now<result){
//                 now=before+result;
//                 res+=' ' +now;
//             }
//         }
//         return res;
//     }
//     return res;
// }
// console.log(fib(0));

// CALLBACK FUNCTIONS

// function first(){
//     //Do something
//     setTimeout(function(){
//         console.log(1);
//     },500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log(`I learn: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('I finish this lesson!');
// }

// learnJS('JS', done);

//OBJECTS

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log('test');
//     }
// };

// console.log(options.name);

// // delete options.name;

// console.log(options);

// for (let key in options) {
//     if (typeof (options[key]) == 'object') {
//         for (let any in options[key]) {
//             console.log(`Object ${key} has property ${any} and value ${options[key][any]}`);
//         }
//     } else {
//         console.log(`Property ${key} value ${options[key]}`);
//     }
// }

// console.log(Object.keys(options).length);
// options.makeTest();

//Destructed objects 

// const {border, bg} = options.colors;

// console.log(border);

//PSEUDO ARRAY

// const arr = [6,2,4,8,5,6];
// arr.sort(compareNum); //sort a number
// console.log(arr);

// function compareNum(a,b){
//     return a-b;
// }
// // arr[99] = 0;
// // console.log(arr.length);



// arr.pop(); //delete elem 
// console.log(arr);
// arr.push(10); //add elem
// console.log(arr);

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(el,index, arr){
//     console.log(`${index} : ${el} inside an array - ${arr}`);
// });

// const str = prompt('','');
// const products = str.split(', '); //crete an ARRAY from string - str!!!
// products.sort(); // sorted a-z
// console.log(products.join('; ')); //create a string from array - products!!!

// const obj = {
//     a: 12,
//     b: 20
// };

// const copy = obj; //Copy link on Obj

// copy.a = 10;

// console.log(copy.a);//10
// console.log(obj.a);//10

// function copy(mainObj){ // ?????????????????????????? ?????????? ??????????????
//     let objCopy = {};

//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.c.x = 10;

// newNumbers.a =10;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d:17,
//     e:20
// };

// // console.log(Object.assign(numbers, add));// add object 'add'  in object 'number'

// const clone = Object.assign({}, add); // ?????????????????????????? ?????????? ??????????????
// clone.d =20;

// console.log(add);
// console.log(clone); 

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // copy Array

// newArray[1] = 'dsadsa';
// console.log(oldArray);
// console.log(newArray);

// // SPREAD ???????????????? ??????????????????????!!! ???????????????? ??????????????????!!!
// const video = ['youtube','vimeo'],
//       blogs = ['journal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log (a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2,5,7];

// log(...num);

// const array = ['a','b'];

// const newArr = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// const someString = 'This is some strange string';

// function reverse(str) {
//    let res = '';
//    if(typeof(str)!='string'){
//     return '????????????!';
//    }
//    for(let i = str.length-1;i>=0;i--){
//     res += str[i];
//    }
//    return res;
//    return str.split('').reverse().join('');//?????????????? ?? ????????????- ????????????-?????????????? ?? ???????????? 
// }

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str =  '?????? ?????????????????? ??????????' : str = '?????????????????? ????????????:\n';

//     arr.forEach(curr =>{
//         if(curr!=missingCurr){
//             str+=`${curr}\n`;
//         }
//     });
//     return str;
// }

// availableCurr([...baseCurrencies,...additionalCurrencies], 'CNY'); // SPREAD ???????????????? ??????????????????????!!! ???????????????? ??????????????????!!

//create Objects OOP

// const solder = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('hello');
//     }
// };

// const john = Object.create(solder);

// // const john = {
// //     health:100
// // };

// // john.__proto__ = solder;//old way, no use now

// Object.setPrototypeOf(john, solder);//actuality way

// console.log(john.armor);
// john.sayHello();

//Static tipization
//To string

//1
// console.log(typeof (String(null)));

// //2
// console.log(typeof (5 + ''));

// //To Number

// //1
// console.log(typeof (Number('4')));

// //2
// console.log(typeof (+'5'));

// //3

// console.log(typeof (parseInt('15px', 10)));

// let answer = +prompt('hello', '');

// //To boolean

// 0, '', null, undefined, NaN; //all false!!!

// //1
// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1; // true!!!

// if (switcher) {
//     console.log('Working...');
// }

// //2
// console.log(typeof(Boolean('4'))); //true
// //3
// console.log(typeof(Boolean(!!'4'))); //true

// function crateCounter(){
//     let counter = 0;
//     const myFunction = function(){
//         counter++;
//         return counter;
//     };
//     return myFunction;
// }

// const increment = crateCounter();

// const c1 = increment() ;
// const c2 = increment();
// const c3 = increment();

// console.log(c1,c2,c3);

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = prop ?  '??????????????' :  '??????????????';


//     return answer ;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average) {
//         return '???????? ???????? ??????????????';
//     } else {
//         return '???????? ???????? ??????????????';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     // const copy = JSON.parse(JSON.stringify(data)); // ???????????? ?????????? ?????????????? ?? ???????????????????? ?????????????????? 
//     const copy = data; 
//     copy.waitors = [{name: 'Mike', age: 32}]; //???????????? ?????????? ??????????????, ?????? ?????? ?????????????????? ?????????????? ???? ????????????????????????
//     return copy;
// }

// transferWaitors(restorantData);

// console.log(restorantData.waitors[0]);

//events

// const btn = document.querySelector('button'),
//     overlay = document.querySelector('overlay');


// // btn.onclick = function(){
// //     alert('hello world');
// // };

// const deleteListener = (event) => {
//     console.log(event.target);
//     console.log(event.type);
// };

// btn.addEventListener('click', deleteListener);
// overlay.addEventListener('click', deleteListener);

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
// });

//DOM
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);


// console.log(document.querySelector('[data-current = "3"]').nextElementSibling);

// for(let node of document.body.childNodes){
//     if(node.nodeName =='#text'){
//         continue;
//     }
//     console.log(node);
// }

//RECURSION

// function pow(x, n) {
//     let res = 1;

//     for (let i = 0; i < n; i++) {
//         res *= x;
//     }

//     return res;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1); //?????? ???????????????? ?????????? ?????????????????????? ?????????????? ???????????????? ????????????????
//     }
// }

// console.log(pow(2, 2)); //4
// console.log(pow(2, 3)); //8
// console.log(pow(2, 4)); //16

// let students = {
//     js: [{
//         name: 'john',
//         progress: 100
//     }, {
//         name: 'ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'petr',
//             progress: 20
//         }, {
//             name: 'ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'sam',
//             progress: 10
//         }]
//     }
// };

// const myRec = (data) => {
//     if(Array.isArray(data)){
//         let total = 0;
//         for(let i = 0;i<data.length;i++){
//             total += data[i].progress;
//         }
//         return [total, data.length];
//     }else{
//         let resArray = [0, 0];

//         for(let subData of Object.values(data)){
//             const resObjArray = myRec(subData);
//             resArray[0] += resObjArray[0];
//             resArray[1] += resObjArray[1];
//         }
//         return resArray;
//     }
// };
// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {

//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }


//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));

// function getTotalProgressRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;


//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];
//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }

// const result = getTotalProgressRecursion(students);
// console.log(result[0] / result[1]);

// function factorial(n) {
//     if(!Number.isInteger(n) || typeof(n) !== 'number'){
//         return 'error';
//     }

//     if(n >= 1){
//         return n  * factorial(n - 1);
//     }else{
//         return 1;
//     }

// }

// console.log(factorial(5.2));

//Mobil browse

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log(e.targetTouches[0].pageX);
//     });

// box.addEventListener('touchmove', (e) => {
//     e.preventDefault();

//     console.log('Move');
// });

// box.addEventListener('touchend', (e) => {
//     e.preventDefault();

//     console.log('End');
// });
// });

//touches
//targetTouches
//changedTouches

//Async,defer, dynamic scripts

// const p = document.querySelectorAll('p');
// console.log(p);

// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }

// loadScript('test.js');