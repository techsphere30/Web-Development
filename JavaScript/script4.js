console.log("Welcome to Script4");

// let h1 = document.getElementById("heading1");
// // console.log(h1)
// let btn = document.getElementById("button");
// // console.log(btn)
// btn.addEventListener("click", function () {
//     h1.classList.add("Dell");
// })


// let input = prompt("Enter a number");
// if (input >= 10) {
//     alert("Morning");
// } else {
//     alert("Evening");
// }


let navbar = document.querySelector(".navlist");
// console.log(navbar)
let bars = document.getElementById("hamburger");
// console.log(bars)
bars.addEventListener("click", function () {
    if (navbar.style.top === "12vh") {
        navbar.style.top = "-100vh";
    } else {
        navbar.style.top = "12vh";
    }
})