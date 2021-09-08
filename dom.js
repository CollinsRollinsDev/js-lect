const head = document.getElementById("head");
const btn = document.querySelector("button")
const head = document.querySelector("#head")
const container = document.querySelector(".container")


btn.innerHTML="Submit";
head.innerHTML="I am the heading";
container.innerText="I am the div";

// Event Listeners
const btn = document.querySelector("button");
btn.style.display="none";

function command(){
    console.log("Welcome to intermediate JavaScript Class.")
}

btn.addEventListener("click", command);

// styling
btn.style.backgroundColor = "blue";

// setTimeOut and setInterval
let counter = 0
console.log(counter)
// setTimeout(() => {
//     counter++;
//     console.log(counter)
// }, 2000)
const x = setInterval(() => {
    counter++;
    console.log(counter)

if(counter > 5){
    clearInterval(x)
}
}, 1000)

const menu = document.querySelector("section")
const btn = document.querySelector("button")

menu.style.visibility="hidden";

let navigate = false;
function controlNav(){
    if(navigate){
       navigate = false
    } else{
       navigate = true
    }
}

function toggleMenu(){
    if(navigate){
    menu.style.visibility="visible";
    } else{
    menu.style.visibility="hidden";
    }
}

btn.addEventListener("click", () => {
    controlNav()
    toggleMenu()
})