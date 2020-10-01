document.addEventListener('DOMContentLoaded', () => {

    let lineOne = document.querySelectorAll('main section ul:nth-child(1) li')
    let lineTwo = document.querySelectorAll('main section ul:nth-child(2) li')
    let lineThree = document.querySelectorAll('main section ul:nth-child(3) li')
    let resetBtn = document.querySelector('main input')

    let tab = [lineOne, lineTwo, lineThree]

    let whoseTurn = "Your"

    let square = false

    resetBtn.addEventListener('click', () => {
        for (let i = 0; i < 3; i++) {
            tab[i]
            for (let j = 0; j < 3; j++) {
                tab[i][j].innerHTML = ""
            }
        }
    })

    for (let i = 0; i < 3; i++) {
        tab[i]
        for (let j = 0; j < 3; j++) {
            tab[i][j].addEventListener('click', () => {
                if (tab[i][j].innerHTML == `<i class="fas fa-times"></i>` || tab[i][j].innerHTML == `<i class="far fa-circle"></i>`) {
                    alert("Cette case est déjà joué...")
                } else {
                    switch (whoseTurn) {
                        case "Your":
                            tab[i][j].innerHTML = `<i class="fas fa-times"></i>`
                            whoseTurn = "Robot"
                            break
                        case "Robot":
                            tab[i][j].innerHTML = `<i class="far fa-circle"></i>`
                            whoseTurn = "Your"
                            break
                        default:
                            false
                            break
                    }
                }
            })
        }
    }



    /* win if 
Ligne
tab[i][j] == tab [i][j+1] && tab[i][j+1] == tab[i][j+2]

    (tab[0][0].innerHTML == tab[0][1].innerHTML && tab[0][1].innerHTML == tab[0][2].innerHTML) ||
    (tab[1][0].innerHTML == tab[1][1].innerHTML && tab[1][1].innerHTML == tab[1][2].innerHTML) ||
    (tab[2][0].innerHTML == tab[2][1].innerHTML && tab[2][1].innerHTML == tab[2][2].innerHTML)) {

  (tab[0][0] == tab [0][1] && tab [0][1] == tab [0][2])||
   ( tab[1][0] == tab [1][1] && tab [1][1]== tab [1][2])||
    (tab[2][0] == tab [2][1] && tab [2][1]== tab [2][2] )
Colonne
    tab[0][0] == tab [1][0] && tab [1][0] == tab [2][0]
    tab[0][1] == tab [1][1] && tab [1][1] == tab [2][1]
    tab[0][2] == tab [1][2] && tab [1][2] == tab [2][2]
Diagonale
    tab[0][0] == tab [1][1] && tab [1][1] == tab [2][2]
    tab[0][2] == tab [1][1] && tab [1][1] == tab [2][0]
    */


})
