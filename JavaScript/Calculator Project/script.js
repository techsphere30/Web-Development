console.log("JS Linked")

let input = document.getElementById("input");
let clearBtn = document.querySelector(".clear");
let Eval = document.querySelector(".eval");
let button = document.querySelectorAll(".btn");
// console.log(button)
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        let value = button[i].innerHTML;
        input.value = input.value + value
        // input.value += value
    })
}

// let array = [11, 22, 33, 44, 55, 66]
// console.log(array)
// array[4] = 98689
// console.log(array)

Eval.addEventListener("click", function () {
    let string = eval(input.value)
    input.value = string
})

clearBtn.addEventListener("click", function () {
    input.value = "";
})