'use strict';
//ClassList
// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'sfas'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); //добавляет класс если нету и напротив.

// if(btns[1].classList.contains('red')){ //проверяет наличие класса
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')){
//     //     btns[1].classList.add('red');
//     // }else{
//     //     btns[1].classList.remove('red');
//     // }

//     btns[1].classList.toggle('red');
// });

// console.log(btns[0].className);

// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.matches('button.red')) { //тег содержит селектор, делегирование событий
//         console.log('Hello');
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

//SetTimeout SetInterval
// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;


// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame,10);

//     function frame() {
//         if(pos == 300){
//             clearInterval(id);
//         }else{
//             pos++;
//             elem.style.top = `${pos}px`;
//             elem.style.left = `${pos}px`;
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);
// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);

// });

// const text = 'hello';
// const timerId = setTimeout(logger,2000,text); //функция которая запустится через установленое время

// function logger() {
//     if(i===3){
//         clearInterval(timerId);
//     }
//     console.log('hello');
//     i++;
// }

// let id = setTimeout(function log(){//рекурсия сет таймаута
//     console.log('hello');
//     id = setTimeout(log, 500);
// },500);