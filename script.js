const numberOfilms = +prompt("Сколько фильфом вы уже посмотрели?", "");

const personalMoviedDB = {
  count: numberOfilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = +prompt("На сколько оценете его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = +prompt("На сколько оценете его?", "");

personalMoviedDB.movies[a] = b;
personalMoviedDB.movies[c] = d;

console.log(personalMoviedDB);
