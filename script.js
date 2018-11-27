
    let carta = document.getElementsByClassName("carta");
    let carte = [...carta];


    let annunci = document.querySelector(".testo");

    this.base = '<img src="immagini/coverSmall.jpg" alt="Nascosta" value="nascosta" class="nascosta">';
    let immagini = [
        '<img src="immagini/anehihan.jpg" alt="Asino" value="Asino" class="asino"></img>',
        '<img src="immagini/anehihan.jpg" alt="Asino" value="Asino" class="asino"></img>',
        '<img src="immagini/chatminou.jpg" alt="Gatto" value="Gatto" class="gatto"></img>',
        '<img src="immagini/chatminou.jpg" alt="Gatto" value="Gatto" class="gatto"></img>',
        '<img src="immagini/chientoutou.jpg" alt="Cane" value="Cane" class="cane"></img>',
        '<img src="immagini/chientoutou.jpg" alt="Cane" value="Cane" class="cane"></img>',
        '<img src="immagini/lamacrachat.jpg" alt="Lama" value="Lama" class="lama"></img>',
        '<img src="immagini/lamacrachat.jpg" alt="Lama" value="Lama" class="lama"></img>',
        '<img src="immagini/lapinscrottes.jpg" alt="Coniglio" value="Coniglio" class="coniglio"></img>',
        '<img src="immagini/lapinscrottes.jpg" alt="Coniglio" value="Coniglio" class="coniglio"></img>',
        '<img src="immagini/lionnegraou.jpg" alt="Leone" value="Leone" class="leone"></img>',
        '<img src="immagini/lionnegraou.jpg" alt="Leone" value="Leone" class="leone"></img>',
        '<img src="immagini/oursbaby.jpg" alt="Orso" value="Orso" class="orso"></img>',
        '<img src="immagini/oursbaby.jpg" alt="Orso" value="Orso" class="orso"></img>',
    ]

    function mischia() {
        immagini = immagini.sort(function (a, b) {
            return 0.5 - Math.random()
        });
        for (i = 0; i < carte.length; i++) {
            carte[i].innerHTML = base + immagini[i];
        }
    }

    let scoperte =[]
    function swapImage() {

        if (this.children[1].classList.contains("scoperta") == false) {
            
            this.children[1].classList.add("scoperta");
            
            annunci.innerHTML = this.children[1].alt;
            scoperte.push(this.children[1]);
            console.log(scoperte.length);

            if (scoperte.length == 2) {
                if (scoperte[0].alt == scoperte[1].alt) {
                    console.log("correct match works");
                    for (i = 0 ; i < scoperte.length ; i++) {
                        scoperte[i].removeEventListener("click", swapImage);
                    };
                    annunci.innerHTML = "You found the two " + scoperte[0].alt + ".<br>Congrats."

                } else if (scoperte[0].alt != scoperte[1].alt) {
                    
                    for (i = 0 ; i < scoperte.length ; i++) {
                        scoperte[i].classList.remove("scoperta");
                        scoperte = [];
                    }
                } else {
                    console.log("bob");
                }
            }

        } else if (this.children[1].classList.contains("scoperta") == true) {
            console.log("?");
            annunci.innerHTML = "You already uncovered this image dimwit."
        }
    }

    for (i = 0; i < carte.length; i++) {
        carte[i].addEventListener("click", swapImage);
    }

    window.onload = mischia();

    //https://medium.freecodecamp.org/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

