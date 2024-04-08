// Main DOM variables 
const mainPaint = document.querySelector('.main_paint')
const colorPalette = document.getElementById('colorPalette')
const SquareSize = document.getElementById('SquareSize')
const clearBtn = document.getElementById('clearBtn')
let squareSizeValue = document.getElementById('squareSizeValue')

// Width of square for drawing
const elementWidth = mainPaint.offsetWidth

// Getting mode buttons
const colorMode = document.getElementById('colorMode')
const eraserMode = document.getElementById('eraserMode')
const rainbowMode = document.getElementById('rainbowMode')

let modeCondition = 'color'

// Default values
let defaultPaintSize = 16
let colorValue = '#ff52f9'

colorPalette.value = colorValue
SquareSize.value = defaultPaintSize
squareSizeValue.innerHTML = defaultPaintSize

// Main events
colorPalette.onchange = (e) => colorValue = e.target.value
SquareSize.onchange = (e) => setSquareSize(e.target.value)
SquareSize.onmousemove = (e) => squareSizeValue.innerHTML = e.target.value
clearBtn.onclick = () => clearSquare()

// Events for changing modes
colorMode.onclick = () => modeCondition = 'color'
eraserMode.onclick = () => modeCondition = 'eraser'
rainbowMode.onclick = () => modeCondition = 'rainbow'

let mouseDown = 0
document.body.onmousedown = () => (mouseDown = 1)
document.body.onmouseup = () => (mouseDown = 0)

// Clear script
function clearSquare() {
    mainPaint.innerHTML = ''
    setQuareSize(SquareSize.value)
}

// Setting or changing the size of square
function setSquareSize(sizeValue) {
    squareSizeValue.innerHTML = sizeValue
    clearSquare()
    setQuareSize(sizeValue)
}

// Changing color
function changeColor(e) {
    if (mouseDown || e.type == 'mousedown') {
        if (modeCondition == 'color') {
            e.target.style.background = colorValue
        } else if (modeCondition == 'eraser') {
            e.target.style.background = '#fff'
        } else if (modeCondition == 'rainbow') {
            let firstValue = Math.floor(Math.random() * 255) 
            let secondValue = Math.floor(Math.random() * 255) 
            let thirdValue = Math.floor(Math.random() * 255) 
            e.target.style.background = `rgb(${firstValue}, ${secondValue}, ${thirdValue})`
        }
    } 

}

// Setting square size and amount of pixels
function setQuareSize(paintSize) {
    let pixelSize = elementWidth / paintSize

    for (let i = 0; i < paintSize ** 2; i++) {
        let pixel = document.createElement('div')
        pixel.setAttribute('style', `width:${pixelSize}px; height: ${pixelSize}px;`)
        mainPaint.appendChild(pixel)
        pixel.addEventListener('mouseover', changeColor)
        pixel.addEventListener('mousedown', changeColor)
    }

}

window.onload = () => {
    setQuareSize(defaultPaintSize)
}