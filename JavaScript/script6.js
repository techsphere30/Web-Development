console.log("Welcome to Script 5")

// let fruits = ["mango", "apple", "pineapple", "banana", "peach", "grapes"];

// //to access an array element we use n-1 (n means the position of element we want to get)
// console.log(fruits)

// fruits[3] = "new fruit";
// console.log(fruits)

let input = document.getElementById("input")
let button = document.querySelector("#button")
button.addEventListener("click", function () {
    let exp = input.value
    alert(eval(exp));
})