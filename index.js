const mainPaint = document.querySelector('.main_paint')
const elementWidth = mainPaint.offsetWidth
const painSize = 15

let pixelSize = elementWidth / painSize

for (let i = 0; i < painSize*painSize; i++) {
    console.log(pixelSize);
    let pixel = document.createElement('div')
    pixel.setAttribute('style', `width:${pixelSize}px; height: ${pixelSize}px;`)
    mainPaint.appendChild(pixel)
    pixel.addEventListener('mousedown', (e) => pixel.style.background = 'red')
}
