const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/luigi&maggie.jpg") {
        myImage.setAttribute("src", "images/Maggie&Luigi.jpg");
    } else {
        myImage.setAttribute("src", "images/luigi&maggie.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (myName) { 
        localStorage.setItem("name", myName); 
        myHeading.textContent = `Welcome to Maggie's life! ${myName}!`; 
    }
}

if (localStorage.getItem("name")) {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Maggie's life! ${storedName}!`; 
}

myButton.onclick = function () {
    setUserName();
};
