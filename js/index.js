const colorInput = document.getElementById("colorInput");
const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", changeColor);

// list of elements with class="color"
const elements = document.getElementsByClassName("color");

// single element with id="colorSpan"
const span = document.getElementById("colorSpan")

// event handler function
function changeColor() {
    let newColor = colorInput.value;
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.style.backgroundColor = newColor;
    }

    span.innerText = newColor
}