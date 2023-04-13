const textE1 = document.getElementById('text')
const speedE1 = document.getElementById('speed')
const text = "We Love Programming!"
let idx = 1
let speed = 300 / speedE1.val

speedE1.addEventListener('input', (element) => {
    speed = 300 / element.target.value
})

writeText()

function writeText() {
    textE1.innerText = text.slice(0,idx)
    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}