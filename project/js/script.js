'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(!newFilm){
            alert('Заполните форму прежде чем подтвердить ее!');
        }else{
            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite){
                console.log('Добавили любимы фильм!');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMoveList(movieDB.movies, movieList);

        }

        event.target.reset();
        
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMoveList(films, parent) {
        parent.innerHTML = '';

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i ) =>{
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                
                createMoveList(films,parent);         
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMoveList(movieDB.movies, movieList);

});