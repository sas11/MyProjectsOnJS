 'use strict';

 const personaMovieDB = {
    count: 0,
    movies: {},
    actor: {},
    genres: [],
    privat: false,
    start: function () {
       personaMovieDB.count = +prompt('How many movies have you watched?', '');

       while (personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
          personaMovieDB.count = +prompt('How many movies have you watched?', '');
       }
    },
    rememberMyFilms: function () {
       let lastMovie,
          ratingMovie,
          answer = 0;

       while (answer != 2) {
          lastMovie = prompt('Last move watched?', '');
          ratingMovie = prompt('And it rating?', '');

          if (lastMovie != null && ratingMovie != null && lastMovie != '' && ratingMovie != '' &&
             lastMovie.length < 50) {
             personaMovieDB.movies[lastMovie] = ratingMovie;
             console.log('done');
             answer++;
          } else {
             console.log('your answers incorrect, repeat please.');
          }
       }
    },
    detectPersonalLevel: function () {
       if (personaMovieDB.count < 10) {
          console.log('Watched very small moves');
       } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
          console.log('Very good ');
       } else if (personaMovieDB.count > 30) {
          console.log('Crazy man');
       } else {
          console.log('error');
       }

    },
    showMyDB: function (hidden) {
       if (!hidden) {
          console.log(personaMovieDB);
       }
    },
    toggleVisibleMyDB: function () {
       if (!personaMovieDB.privat) {
          personaMovieDB.privat = true;
       } else {
          personaMovieDB.privat = false;
       }
    },
    writeYourGenres: function () {
       for (let i = 1; i < 2; i++) {
          let genres = prompt(`Write your liked genres across ', '`, '').toLowerCase();
          if (genres != null && genres != '') {
             personaMovieDB.genres = genres.split(', ');//string to array
             personaMovieDB.genres.sort();
          } else {
            console.log('Incorrect data');
             i--;
          }
       }
       personaMovieDB.genres.forEach((val, index) => {
          console.log(`Genre #${index+1} - the ${val}`);
       });
    }
 };
