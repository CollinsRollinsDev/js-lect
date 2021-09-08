
// const getUsers = () => {
//  fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
//      const data = res.json();
//      console.log(data)
//  })
// } 

const { pathToFileURL } = require("url");

const holder = document.querySelector(".container");
let data;
const getUsers = async() => {
    const response =  await fetch("https://jsonplaceholder.typicode.com/users");
    data = await response.json()
    data.map((singleData => {
       const name = singleData.name
        const div = document.createElement("div");
        div.innerHTML = name;
        holder.appendChild(div);
    }))
}


// getUsers();


async function main (){
 await getUsers()
}
main()