let uno = document.querySelector(".casella1")
let due = document.querySelector(".casella2")
let tre = document.querySelector(".casella3")
let quattro = document.querySelector(".casella4")
let cinque = document.querySelector(".casella5")
let sei = document.querySelector(".casella6")
let sette = document.querySelector(".casella7")
let otto = document.querySelector(".casella8")
let nove = document.querySelector(".casella9")
let dieci = document.querySelector(".casella10")
let undici = document.querySelector(".casella11")
let dodici = document.querySelector(".casella12")
let tredici = document.querySelector(".casella13")
let quattordici = document.querySelector(".casella14")

swapImageCounter = 0;

function counter() {
    swapImageCounter++;
    return swapImageCounter % 2 == 0;    
}

function swapImage() {
    counter()
    if (counter() == true) {
        this.style.backgroundImage = "url('immagini/anehihan.jpg')"
    } else {
        this.style.backgroundImage = "url('immagini/coverSmall.jpg')"
    }
}
//https://medium.freecodecamp.org/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
uno.addEventListener("click", swapImage);
uno.addEventListener("click", counter);

due.addEventListener("click", swapImage);
due.addEventListener("click", counter);

tre.addEventListener("click", swapImage);
tre.addEventListener("click", counter);

quattro.addEventListener("click", swapImage);
quattro.addEventListener("click", counter);

cinque.addEventListener("click", swapImage);
cinque.addEventListener("click", counter);

sei.addEventListener("click", swapImage);
sei.addEventListener("click", counter);

sette.addEventListener("click", swapImage);
sette.addEventListener("click", counter);

otto.addEventListener("click", swapImage);
otto.addEventListener("click", counter);

nove.addEventListener("click", swapImage);
nove.addEventListener("click", counter);

nove.addEventListener("click", swapImage);
nove.addEventListener("click", counter);

dieci.addEventListener("click", swapImage);
dieci.addEventListener("click", counter);

undici.addEventListener("click", swapImage);
undici.addEventListener("click", counter);

dodici.addEventListener("click", swapImage);
dodici.addEventListener("click", counter);

tredici.addEventListener("click", swapImage);
tredici.addEventListener("click", counter);

quattordici.addEventListener("click", swapImage);
quattordici.addEventListener("click", counter);