console.log("welcome to DOM Manipulation Topic");
// console.log(document); //contains the whole HTML document

// let heading = document.getElementsByTagName("h1")[0];

// console.log(document.getElementsByClassName("heading1"));
//  used to get elements using class name

// console.log(document.querySelector(".heading1")); //use to get elements using class or id but it gets only first element

// console.log(document.querySelectorAll(".heading1"));//use to get All elements using class or id

// console.log(document.getElementById("heading1"));

let h1 = document.getElementById("heading1");
// console.log(h1)
let xd = document.getElementById("button");
// console.log(xd)
xd.addEventListener("click", function () {
    h1.textContent = "I am H1 and i am Changed";
    h1.style.color = "red";
})