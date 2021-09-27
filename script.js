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

    function first(){
        setTimeout(function() {
            console.log(1);
        },500);
    }

    function second(){
        console.log(2);
    }
    first();
    second();

    function learnJavaScript(lang,callback){
        console.log(`Я учу:${lang}`);
        callback();
    }
    function done () { 
        console.log(`Я прошел этот урок!`);
    }
    learnJavaScript(`JavaScript`,done);


    const options = { 
        name:`Test`,
        width:1024,
        height:1024,
        colors: {border:`black`, bg: `red`}
    };
    let counter =0;
    console.log(options.colors.bg);
    for (let key  in options){
        if (typeof(options[key]) === `object`){
            for(let i in options[key]){
                console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
                counter++;
            }
        } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
        }
    }
console.log(counter);