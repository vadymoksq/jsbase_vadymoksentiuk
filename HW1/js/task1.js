//    По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
//    Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2.

var x1 = prompt("Введите координату оси X первой точки");
var y1 = prompt("Введите координату оси Y первой точки");
var x2 = prompt("Введите координату оси X второй точки");
var y2 = prompt("Введите координату оси Y второй точки");
var x = prompt("Введите значение переменной x");

console.log("Координаты первой точки:", x1, y1);
console.log("Координаты второй точки:", x2, y2);
console.log("Переменая x:", x);

let k = (y1-y2) / (x1 - x2);
let b = y2 - k*x2;
let y = k*x + b;

console.log("Переменая k равна:", k);
console.log("Переменая b равна:", b);
console.log("Переменая y равна:", y);