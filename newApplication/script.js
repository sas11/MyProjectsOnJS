 'use strict';
 const numberOfFilms = +prompt('How many movies have you watched?', '');

 const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
 }

 
let lastMovie,
    ratingMovie,
    answer=0;

while(answer!=2){
   lastMovie = prompt('Last move watched?', '');
   ratingMovie = prompt('And it rating?', '');
   
   if(lastMovie != null && ratingMovie != null && lastMovie != '' &&ratingMovie != '' && lastMovie.length <50){
      personaMovieDB.movies[lastMovie] = ratingMovie;
      alert('done!');
      answer++;
   }else{
      alert('your answers incorrect, repeat please.');
   }
}

if(personaMovieDB.count < 10){
   alert('Watched very small moves');
}else if(personaMovieDB.count >=10 && personaMovieDB.count <=30){
   alert('Very good ');
}else if(personaMovieDB.count >30){
   alert('Crazy man');
}else{
   alert('error');
}
   


console.dir(personaMovieDB);