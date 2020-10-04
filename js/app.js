document.addEventListener('DOMContentLoaded', () => {

    let lineOne = document.querySelectorAll('main section ul:nth-child(1) li')
    let lineTwo = document.querySelectorAll('main section ul:nth-child(2) li')
    let lineThree = document.querySelectorAll('main section ul:nth-child(3) li')
    let tab = [lineOne, lineTwo, lineThree]

    let resetBtn = document.querySelector('main input')

    let whoseTurn = "Your"

    let winColor = "background-color:#27ae60;"

    let square = [{
        position: tab[0][0],
        isFull: false,
        fullOf: ""
    }, {
        position: tab[0][1],
        isFull: false,
        fullOf: ""
    }, {
        position: tab[0][2],
        isFull: false,
        fullOf: ""
    }, {
        position: tab[1][0],
        isFull: false,
        fullOf: ""
    }, {
        position: tab[1][1],
        isFull: false,
        fullOf: ""
    }, {
        position: tab[1][2],
        isFull: false,
        fullOf: ""
    }, {
        position: tab[2][0],
        isFull: false,
        fullOf: ""
    }, {
        position: tab[2][1],
        isFull: false,
        fullOf: ""
    }, {
        position: tab[2][2],
        isFull: false,
        fullOf: ""
    }]

    for (let i = 0; i < 9; i++) {
        square[i].position.addEventListener('click', () => {
            if (square[i].isFull == true) {
                alert("Cette case est déjà joué...")
            } else {
                switch (whoseTurn) {
                    case "Your":
                        square[i].position.innerHTML = `<i class="fas fa-times"></i>`;
                        square[i].fullOf = "X";
                        square[i].isFull = true;
                        whoseTurn = "Robot"
                        break
                    case "Robot":
                        square[i].position.innerHTML = `<i class="fas fa-circle"></i>`;
                        square[i].fullOf = "O";
                        square[i].isFull = true;
                        whoseTurn = "Your"
                        break
                    default:
                        false
                        break
                }
            }
            gameRules()
        })

    }

    let reset = () => {
        for (let i = 0; i < 9; i++) {
            square[i].position.innerHTML = ""
            square[i].fullOf = "";
            square[i].isFull = false;
            square[i].position.style.cssText = `background-color :#3498db;`
            whoseTurn = "Your"
        }
    }

    resetBtn.addEventListener('click', () => {
        reset()
    })

    let gameWinCondition = (a, b, c, d) => {
        return (square[a].fullOf == d && square[b].fullOf == d && square[c].fullOf == d)
    }
    let gameWinEvent = (a, b, c, d) => {
        square[a].position.style.cssText = `${winColor}`
        square[b].position.style.cssText = `${winColor}`
        square[c].position.style.cssText = `${winColor}`
        alert(`${d} win!`)
    }
    let gameRules = () => {
        if (gameWinCondition(0, 1, 2, "X")) {
            gameWinEvent(0, 1, 2, "X")
        } else if (gameWinCondition(3, 4, 5, "X")) {
            gameWinEvent(3, 4, 5, "X")
        } else if (gameWinCondition(6, 7, 8, "X")) {
            gameWinEvent(6, 7, 8, "X")
        } else if (gameWinCondition(0, 3, 6, "X")) {
            gameWinEvent(0, 3, 6, "X")
        } else if (gameWinCondition(1, 4, 7, "X")) {
            gameWinEvent(1, 4, 7, "X")
        } else if (gameWinCondition(2, 5, 8, "X")) {
            gameWinEvent(2, 5, 8, "X")
        } else if (gameWinCondition(0, 4, 8, "X")) {
            gameWinEvent(0, 4, 8, "X")
        } else if (gameWinCondition(2, 4, 6, "X")) {
            gameWinEvent(2, 4, 6, "X")
        } else if (gameWinCondition(0, 1, 2, "O")) {
            gameWinEvent(0, 1, 2, "O")
        } else if (gameWinCondition(3, 4, 5, "O")) {
            gameWinEvent(3, 4, 5, "O")
        } else if (gameWinCondition(6, 7, 8, "O")) {
            gameWinEvent(6, 7, 8, "O")
        } else if (gameWinCondition(0, 3, 6, "O")) {
            gameWinEvent(0, 3, 6, "O")
        } else if (gameWinCondition(1, 4, 7, "O")) {
            gameWinEvent(1, 4, 7, "O")
        } else if (gameWinCondition(2, 5, 8, "O")) {
            gameWinEvent(2, 5, 8, "O")
        } else if (gameWinCondition(0, 4, 8, "O")) {
            gameWinEvent(0, 4, 8, "O")
        } else if (gameWinCondition(2, 4, 6, "O")) {
            gameWinEvent(2, 4, 6, "O")
        }
    }




})
