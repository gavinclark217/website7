const textE1 - document.getElementById('text')
const speedE1 = document.getElementById('speed')
const text - 'We Love Programming!'
let idx = 1
let speed = 300 / speedE1.val

writeText()

function writeText() {
    textE1.innerText = text
}