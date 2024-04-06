const mainPaint = document.querySelector('.main_paint')
const elementWidth = mainPaint.offsetWidth
const painSize = 15


let pixelSize = elementWidth / painSize

let mouseDown = 0
mainPaint.onmousedown = () => (mouseDown = 1)
mainPaint.onmouseup = () => (mouseDown = 0)

function changeColor(e) {
    if(mouseDown) {
        e.target.style.background = 'red'
    }
}

for (let i = 0; i < painSize*painSize; i++) {
    let pixel = document.createElement('div')
    pixel.setAttribute('style', `width:${pixelSize}px; height: ${pixelSize}px;`)
    mainPaint.appendChild(pixel)
    pixel.addEventListener('mouseover', changeColor)
    pixel.addEventListener('mousedown', changeColor)
}
