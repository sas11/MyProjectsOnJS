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
// // if(num <49){
// //     console.log('error');
// // }
// // else if( num >100){
// //     console.log('many');
// // }else{
// //     console.log('Ok');
// // }

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
//         return 'Ошибка, проверьте данные';
//     }
//     if(hour === 0 || hour ===1 ){
//             return `Это ${hour} часов и ${mim} минут`;
//         }
//         else{
//             return `Это ${hour} часа и ${min} минут`;
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