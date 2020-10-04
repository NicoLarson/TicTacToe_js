document.addEventListener('DOMContentLoaded', () => {

    let lineOne = document.querySelectorAll('main section ul:nth-child(1) li')
    let lineTwo = document.querySelectorAll('main section ul:nth-child(2) li')
    let lineThree = document.querySelectorAll('main section ul:nth-child(3) li')
    let tab = [lineOne, lineTwo, lineThree]

    let resetBtn = document.querySelector('main input')

    let whoseTurn = "Your"

    let winColor = "background-color:#27ae60;"
    let loseColor = "background-color:#f7797d;"

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



    resetBtn.addEventListener('click', () => {
        for (let i = 0; i < 9; i++) {
            square[i].position.innerHTML = ""
            square[i].fullOf = "";
            square[i].isFull = false;
            square[i].position.style.cssText = `background-color :#3498db;`
            whoseTurn = "Your"
        }
    })

    let gameRules = () => {
        if (square[0].fullOf == "X" && square[1].fullOf == "X" && square[2].fullOf == "X") {
            square[0].position.style.cssText = `${winColor}`
            square[1].position.style.cssText = `${winColor}`
            square[2].position.style.cssText = `${winColor}`
            alert("X win!")
            console.log("X win!")
        } else if (square[3].fullOf == "X" && square[4].fullOf == "X" && square[5].fullOf == "X") {
            square[3].position.style.cssText = `${winColor}`
            square[4].position.style.cssText = `${winColor}`
            square[5].position.style.cssText = `${winColor}`
            alert("X win!")
            console.log("X win!")
        } else if (square[6].fullOf == "X" && square[7].fullOf == "X" && square[8].fullOf == "X") {
            square[6].position.style.cssText = `${winColor}`
            square[7].position.style.cssText = `${winColor}`
            square[8].position.style.cssText = `${winColor}`
            alert("X win!")
            console.log("X win!")
        } else if (square[0].fullOf == "X" && square[3].fullOf == "X" && square[6].fullOf == "X") {
            square[0].position.style.cssText = `${winColor}`
            square[3].position.style.cssText = `${winColor}`
            square[6].position.style.cssText = `${winColor}`
            alert("X win!")
            console.log("X win!")
        } else if (square[1].fullOf == "X" && square[4].fullOf == "X" && square[7].fullOf == "X") {
            square[1].position.style.cssText = `${winColor}`
            square[4].position.style.cssText = `${winColor}`
            square[7].position.style.cssText = `${winColor}`
            alert("X win!")
            console.log("X win!")
        } else if (square[2].fullOf == "X" && square[5].fullOf == "X" && square[8].fullOf == "X") {
            square[2].position.style.cssText = `${winColor}`
            square[5].position.style.cssText = `${winColor}`
            square[8].position.style.cssText = `${winColor}`
            alert("X win!")
            console.log("X win!")
        } else if (square[0].fullOf == "X" && square[4].fullOf == "X" && square[8].fullOf == "X") {
            square[0].position.style.cssText = `${winColor}`
            square[4].position.style.cssText = `${winColor}`
            square[8].position.style.cssText = `${winColor}`
            alert("X win!")
            console.log("X win!")
        } else if (square[2].fullOf == "X" && square[4].fullOf == "X" && square[6].fullOf == "X") {
            square[2].position.style.cssText = `${winColor}`
            square[4].position.style.cssText = `${winColor}`
            square[6].position.style.cssText = `${winColor}`
            alert("X win!")
            console.log("X win!")
        } else if (square[0].fullOf == "O" && square[1].fullOf == "O" && square[2].fullOf == "O") {
            square[0].position.style.cssText = `${loseColor}`
            square[1].position.style.cssText = `${loseColor}`
            square[2].position.style.cssText = `${loseColor}`
            alert("O win!")
            console.log("O win!")
        } else if (square[3].fullOf == "O" && square[4].fullOf == "O" && square[5].fullOf == "O") {
            square[3].position.style.cssText = `${loseColor}`
            square[4].position.style.cssText = `${loseColor}`
            square[5].position.style.cssText = `${loseColor}`
            alert("O win!")
            console.log("O win!")
        } else if (square[6].fullOf == "O" && square[7].fullOf == "O" && square[8].fullOf == "O") {

            square[6].position.style.cssText = `${loseColor}`
            square[7].position.style.cssText = `${loseColor}`
            square[8].position.style.cssText = `${loseColor}`
            alert("O win!")
            console.log("O win!")
        } else if (square[0].fullOf == "O" && square[3].fullOf == "O" && square[6].fullOf == "O") {
            square[0].position.style.cssText = `${loseColor}`
            square[3].position.style.cssText = `${loseColor}`
            square[6].position.style.cssText = `${loseColor}`
            alert("O win!")
            console.log("O win!")
        } else if (square[1].fullOf == "O" && square[4].fullOf == "O" && square[7].fullOf == "O") {
            square[1].position.style.cssText = `${loseColor}`
            square[4].position.style.cssText = `${loseColor}`
            square[7].position.style.cssText = `${loseColor}`
            alert("O win!")
            console.log("O win!")
        } else if (square[2].fullOf == "O" && square[5].fullOf == "O" && square[8].fullOf == "O") {
            square[2].position.style.cssText = `${loseColor}`
            square[5].position.style.cssText = `${loseColor}`
            square[8].position.style.cssText = `${loseColor}`
            alert("O win!")
            console.log("O win!")
        } else if (square[0].fullOf == "O" && square[4].fullOf == "O" && square[8].fullOf == "O") {
            square[0].position.style.cssText = `${loseColor}`
            square[4].position.style.cssText = `${loseColor}`
            square[8].position.style.cssText = `${loseColor}`
            alert("O win!")
            console.log("O win!")
        } else if (square[2].fullOf == "O" && square[4].fullOf == "O" && square[6].fullOf == "O") {
            square[2].position.style.cssText = `${loseColor}`
            square[4].position.style.cssText = `${loseColor}`
            square[6].position.style.cssText = `${loseColor}`
            alert("O win!")
            console.log("O win!")
        } else if (square[0].isFull == true && square[1].isFull == true && square[2].isFull == true && square[3].isFull == true && square[4].isFull == true && square[5].isFull == true && square[6].isFull == true && square[7].isFull == true && square[8].isFull == true) {
            alert("Draw!")
            console.log("Draw!")
        }
    }




})
