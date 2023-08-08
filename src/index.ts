import logoImg from "./logo.webp";


console.log("gello webpack");
console.log(process.env.API_BASE);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

var prueba: string = "a";