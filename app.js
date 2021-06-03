const text = document.querySelector(".text");
const textContent = text.textContent;
const splitText = textContent.split("");
text.textContent = '';

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";

}

let char = 0;
let interval = setInterval(unTick, 70);

function unTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if (char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(interval);
    interval = null;
}