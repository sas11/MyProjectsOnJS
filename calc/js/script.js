'use strict';

const rub = document.querySelector('#rub'),
      usd = document.querySelector('#usd');


      rub.addEventListener('input', () => {
        
        const request = new XMLHttpRequest();
        request.open('GET', 'js/current1.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('load', () => {

            if(request.status===200){
                const data = JSON.parse(request.response);

                usd.value = (+rub.value/data.current.usd).toFixed(2);
            }else{
                usd.value = 'данный ошибочны!';
            }

        });

      });

    


















// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest(); //запрос

//     // request.open(method, url, async, login, pass); 
//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => {
//         if( request.status == 200) {
            
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         }else{
//             inputUsd.value = 'что-то пошло не так';
//         }
//     });

    // status
    // statusText
    // response
    // readyState

// });
