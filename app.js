let color = "black";

let createBoard = (size) => {
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", divPaint);
        container.insertAdjacentElement("beforeend", div);
    }
}
createBoard(16);

let getSize = () => {
    let input = prompt("please set the size of the board");
    let message = document.querySelector("#message");

    if(input === "") {
        message.innerText = "please povide a number"
    }
    else if (input < 0 || input > 100 ) {
        message.innerText = "please provide a number betwen 1 - 100";
    }
    else {
        message.innerText = "size of board is set";
        return input;
    }
}

let btn_popup = document.querySelector("#popup");
btn_popup.addEventListener("click", function(){
    let size = getSize();
    createBoard(size);
})

function divPaint() {
    if (color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function clearBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "");
}