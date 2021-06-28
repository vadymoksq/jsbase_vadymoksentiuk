// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// 		Функция должна вернуть "Even" или "Odd";

// 		function isEven(num) {
// 			// your code here
// 		}
var a = prompt("Введите число")

function isEven(a) {
    a % 2 === 0 ? console.log('Even') : console.log('Odd')
}
isEven()