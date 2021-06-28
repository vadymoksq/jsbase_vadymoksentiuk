// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.


var a = prompt("Введите первое число")
b = prompt("Введите второе число")
sign = prompt("Что мутить будет?")

function calculate(a, b, sign) {
    if (Number.isInteger(a) && (b)) {
        if (sign === '+') {
            console.log(a + b)
        }
        else if (sign === '-') {
            console.log(a - b)
        }
        else if (sign === '*') {
            console.log(a * b)
        }
        else if (sign === '/') {
            console.log(a / b)
        }
        else {
            console.log('Миша все фигня, давай по новой')
        }
    }
    else {
        console.log('Миша, мне нужны числа, буквы делить в парламенте будем')
    }
}
calculate();