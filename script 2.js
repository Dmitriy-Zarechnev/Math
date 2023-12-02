alert(`
    Hello! Welcome to "PlayBox" version 0.1
`)

let game = 1
while (game) {
    const typeGame = prompt(`
    Choose your game:
    1 - enigma;
    2 - calculator;
    3 - clicker;
    Enter 'escape' for exit
`)

    if (typeGame === 'escape') {
        alert('Have a nice day!')
        break
        // enigma
    } else if (typeGame === '1' || typeGame === 'enigma') {
        alert('Game starting ...')
        alert('"Enigma" game')

        alert(`
    I will randomly pick number from 1 to 100.
    You have to guess what it is the number.
    If your number is less or more then my number, i will tell you after each round.
    Let's get started?
    `)
        let aim = Math.round(Math.random() * 100)
        console.log(aim)
        let tip = +prompt('Try to guees')

        for (let i = 1; i <= 100; i++) {
            if (tip < aim) {
                alert('Too small')
                tip = +prompt('Try to guees')
            } else if (tip > aim) {
                alert('Too large')
                tip = +prompt('Try to guees')
            } else if (tip > 100 || tip < 0 || tip != Number(tip)) {
                alert('Incorrect enter =(')
                tip = +prompt('Try to guees')
            } else if (tip === aim) {
                alert('Correct!')
                alert(' You have used ' + i + ' rounds')
                break
            }
        }

        // calculator
    } else if (typeGame === '2' || typeGame === 'calcultor') {
        alert('Game starting ...')
        alert('"Calculator" game')
        alert(`
    I will randomly write mathematical equations.
    You have to calculate 5 correctly.
    Let's get started?
    `)
        for (let i = 0; i <= 5; i++) {
            let c = ''
            let p = '+-*/'
            for (let i = 0; i < 1; i++) {
                c += p.charAt(Math.floor(Math.random() * p.length))
            }
            let a = Math.round(Math.random() * 20)
            let b = Math.round(Math.random() * 20)
            console.log(any(c, a, b))
            let n = 0
            let eq
            if (a < b) {
                eq = +prompt(String(b) + String(c) + String(a))
            } else {
                eq = +prompt(String(a) + String(c) + String(b))
            }
            a === b ? c != '-' : 0
            any(c, a, b) === eq ? n++ : 0
            if (i === 5) {
                alert(' There are ' + n + ' from 5 right answers')
            }
        }

        // clicker
    } else if (typeGame === '3' || typeGame === 'clicker') {
        alert('Game starting ...')
        alert('"Clicker" game')

        alert(`
    I will randomly show you 10 system's windows.
    You have to cklick all of them as fast as you can.
    If 'confirm' window appears, you will cklick 'cancel'.
    Let's get started?
    `)
        let q = 0
        for (let i = 0; i <= 9; i++) {
            let vi
            let ra = Math.round(Math.random() * 100) / 100
            console.log(ra)
            if (ra >= 0.5) {
                vi = alert('Enter "OK"')
                console.log(vi)
            } else {
                vi = confirm('Enter "cancel"')
                console.log(vi)
            }
            if (vi === true) {
                q = q + 1
            }
            i === 9 ? alert('mistakes: ' + q) : 0
            console.log(i)
            console.log(q)
        }
    } else {
        alert('Incorrect number or word, try it again =(')
    }
    game = game++
}

function any(c, a, b) {
    if (c === '*') {
        return a * b
    } else if (c === '+') {
        return a + b
    } else if (c === '-' && a > b) {
        return a - b
    } else if (c === '-' && a < b) {
        return b - a
    } else if (c === '/') {
        return Math.round((a / b) * 100) / 100
    }
}
