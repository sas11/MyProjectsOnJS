 'use strict';
 const numberOfFilms = prompt('How many movies have you watched?', '');

 const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
 }

 
 let lastMovie,
     ratingMovie;

lastMovie = prompt('Last move watched?', '');
ratingMovie = prompt('And it rating?', '');
personaMovieDB.movies[lastMovie] = ratingMovie;

lastMovie = prompt('Last move watched?', '');
ratingMovie = prompt('And it rating?', '');
personaMovieDB.movies[lastMovie] = ratingMovie;
console.dir(personaMovieDB);