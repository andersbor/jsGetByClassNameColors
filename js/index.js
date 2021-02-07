let colorInput = document.getElementById("colorInput");
let changeColorButton = document.getElementById("changeColorButton");
let elements = document.getElementsByClassName("color");
changeColorButton.addEventListener("click", changeColor);

let span = document.getElementById("colorSpan")

function changeColor() {
    let newColor = colorInput.value;
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.style.backgroundColor = newColor;
    }

    span.innerText = newColor
}