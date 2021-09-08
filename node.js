const element = document.querySelector(".container");

const div = document.createElement("div");
div.classList.add("test")
const img = document.createElement("img");
img.classList.add("imgSide")
img.setAttribute("src", "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1440")
div.appendChild(img)

const ul = document.createElement("ul");
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

li.innerHTML = "Magazine";
li2.innerHTML = "Mag";
li3.innerHTML = "M";

ul.appendChild(li)
ul.appendChild(li2)
ul.appendChild(li3)

div.appendChild(ul)
element.appendChild(div)

console.log(div)