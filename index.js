const DOMSelectors = {
    button: document.getElementByld("btn"),
    text: document.querySelectorAll("#text"),
    point: document.querySelector(".point"),
    pointTwo: document.querygetElementByld("pointTwo"),
};
console.log(DOMSelectors.pointTwo);

function backgroundAndText(background, text) {
    background.style.backgroundColor = "red";
    text.innerHTML = "this is a big red box";
    text.style.fontSize = "40px";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);