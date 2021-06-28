// 5.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  
		
// 		var computerChoice = Math.random();
// 		alert(computerChoice);
		
//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// 		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// 		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// 		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново


// document.querySelector("#cut").onclick = cutFunc();
// document.querySelector("#stone").onclick = stoneFunc();
// document.querySelector("#paper").onclick = paperFunc();

var computerChoice = 0;

function cutFunc(){
    let userChoice = "cut"
    computerChoiceFunc()
    if (userChoice === computerChoice) {
        alert("Ничья")
    }
    else {
        if (computerChoice === "paper"){
            alert("Вы победили")
        }
        else {
            alert("Я победил")
        }
    }

}

function stoneFunc(){
    let userChoice = "stone"
    computerChoiceFunc()
    if (userChoice === computerChoice) {
        alert("Ничья")
    }
    else {
        if (computerChoice === "paper"){
            alert("Вы победили")
        }
        else {
            alert("Я победил")
        }
    }
}

function paperFunc(){
    let userChoice = "paper"
    computerChoiceFunc()
    if (userChoice === computerChoice) {
        alert("Ничья")
    }
    else {
        if (computerChoice === "stone"){
            alert("Вы победили")
        }
        else {
            alert("Я победил", computerChoice)
        }
    }
    
}

function computerChoiceFunc(){
    let random = Math.random();

    if (random < 0.35) {
        computerChoice = 'stone'
    }
    else if (random <= 0.65) {
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'cut'
    }
    return computerChoice;
}
