 'use strict';
 let numberOfFilms;

 function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '').trim();

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
       numberOfFilms = +prompt('How many movies have you watched?', '');
    }
 }

 start();

 const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
 }

 function rememberMyFilms() {
    let lastMovie,
       ratingMovie,
       answer = 0;

    while (answer != 2) {
       lastMovie = prompt('Last move watched?', '').trim();
       ratingMovie = prompt('And it rating?', '').trim();

       if (lastMovie != null && ratingMovie != null && lastMovie != '' && ratingMovie != '' &&
        lastMovie.length < 50) {
          personaMovieDB.movies[lastMovie] = ratingMovie;
          console.log('done');
          answer++;
       } else {
          alert('your answers incorrect, repeat please.');
       }
    }
 }

 rememberMyFilms();

 function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
       alert('Watched very small moves');
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
       alert('Very good ');
    } else if (personaMovieDB.count > 30) {
       alert('Crazy man');
    } else {
       alert('error');
    }

 }

 detectPersonalLevel();

function showMyDB(hidden){
   if(!hidden){
      console.log(personaMovieDB);
   }
}

showMyDB(personaMovieDB.privat);
 
function writeYourGenres(){
   for(let i = 0;i<=2;i++){
      personaMovieDB.genres[i] = prompt(`Your liked genres number ${i+1} ?`, '');
   }
}

writeYourGenres();