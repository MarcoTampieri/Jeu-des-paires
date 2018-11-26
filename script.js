function global() {
    let carta = document.getElementsByClassName("carta");
    let carte = [...carta];


    let annunci = document.querySelector(".testo");

    this.base = '<img src="immagini/coverSmall.jpg" alt="Nascosta" type="nascosta" class="nascosta">';
    let immagini = [
        '<img src="immagini/anehihan.jpg" alt="Asino" type="Asino" class="faccie"></img>',
        '<img src="immagini/anehihan.jpg" alt="Asino" type="Asino" class="faccie"></img>',
        '<img src="immagini/chatminou.jpg" alt="Gatto" type="Gatto" class="faccie"></img>',
        '<img src="immagini/chatminou.jpg" alt="Gatto" type="Gatto" class="faccie"></img>',
        '<img src="immagini/chientoutou.jpg" alt="Cane" type="Cane" class="faccie"></img>',
        '<img src="immagini/chientoutou.jpg" alt="Cane" type="Cane" class="faccie"></img>',
        '<img src="immagini/lamacrachat.jpg" alt="Lama" type="Lama" class="faccie"></img>',
        '<img src="immagini/lamacrachat.jpg" alt="Lama" type="Lama" class="faccie"></img>',
        '<img src="immagini/lapinscrottes.jpg" alt="Coniglio" type="Coniglio" class="faccie"></img>',
        '<img src="immagini/lapinscrottes.jpg" alt="Coniglio" type="Coniglio" class="faccie"></img>',
        '<img src="immagini/lionnegraou.jpg" alt="Leone" type="Leone" class="faccie"></img>',
        '<img src="immagini/lionnegraou.jpg" alt="Leone" type="Leone" class="faccie"></img>',
        '<img src="immagini/oursbaby.jpg" alt="Orso" type="Orso" class="faccie"></img>',
        '<img src="immagini/oursbaby.jpg" alt="Orso" type="Orso" class="faccie"></img>',
    ]

    function mischia() {
        immagini = immagini.sort(function (a, b) {
            return 0.5 - Math.random()
        });
        for (i = 0; i < carte.length; i++) {
            carte[i].innerHTML = base + immagini[i];
        }
    }

    function swapImage() {

        let scoperte =[]

        if (this.classList.contains("scoperta") == false) {
            console.log(this)
            this.classList.add("scoperta");
            this.children[0].style.zIndex = -1;
            annunci.innerHTML = "calm thine mammaries";
            scoperte.push(this.children[1]);
            if (scoperte.length = 2) {
                if (scoperte[0].type == scoperte[1].type) {
                    console.log("correct match works");
                }
            }

        } else {
            console.log("?");
            annunci.innerHTML = "You already uncovered this image dimwit."
        }
    }

    for (i = 0; i < carte.length; i++) {
        carte[i].addEventListener("click", swapImage);
    }

    window.onload = mischia();

    //https://medium.freecodecamp.org/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

    /*
    uno.addEventListener("click", swapImage);
    uno.addEventListener("click", counter);

    swapImageCounter = 0;

    function counter() {
        swapImageCounter++;
        return swapImageCounter % 2 == 0;    
    }



    */
}

window.onload = global();