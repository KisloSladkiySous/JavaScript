"use strict";
const numberOfFilms =+prompt('Сколько фильмов ты посмотрел?');
const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};

   

    for(let i = 0;i < 2;i++){
        
        const a=prompt('Один из последних просмотренных фильмов'),
        b=prompt('На сколько ты его оценишь?');
        if (a!= null && b !=null && a!=`` && b!=`` && a.length<50){
            personalMovieDB.movies[a]=b;
            console.log(`da`);
        } else {
            console.log(`error`);
            i--;
        }
    }
    switch(personalMovieDB.count){
        case 10:
            console.log(`Harosh`);
            break;
        case 15:
            console.log(`SuperHaroosh`);
            break;
        default:console.log(`Krasava`);
    }
    console.log(personalMovieDB);