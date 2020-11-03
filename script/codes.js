
// function to create a new bar

var createNewBar = function (gameArea, marginLeft) {

    var newBarContent = document.createElement('div')
    newBarContent.classList.add('barContent')

    var newBarTop = document.createElement('div')
    newBarTop.classList.add('barTop')

    var heightTop = Math.random() * 200 + 'px'

    newBarTop.style.height = heightTop

    var newBarBottom = document.createElement('div')
    newBarBottom.classList.add('barBottom')

    var heightBottom = 300 - heightTop.replace('px', '') - 100

    heightBottom > 0 ? newBarBottom.style.height = heightBottom + 'px' : newBarBottom.style.height = '1px'

    newBarContent.appendChild(newBarTop)
    newBarContent.appendChild(newBarBottom)

    var newBar = document.createElement('div')
    newBar.classList.add('bars')

    newBarContent.style.marginLeft = '0px'

    newBar.appendChild(newBarContent)

    gameArea.appendChild(newBar)
}

// function to get first bar position

var score = document.querySelector('.score')
var initialScore = 0
score.innerHTML = `&nbsp${initialScore}`
var bird = document.querySelector('.birdImage')
var birdMovement = 150

var gameLooping = function () {
    var area = document.querySelector('.gameArea')
    var bars = document.querySelectorAll('.bars')
    bird.style.marginTop = birdMovement.toFixed(2)+'px'

    if(birdMovement >= 300 - bird.clientHeight){
        birdMovement = 300 - bird.clientHeight
    }else{
        birdMovement += 1
    }

    document.onkeypress = function(e){
        if(e.key == " "){
            console.log('key pressed')
            if(birdMovement - 40 < 0){
                birdMovement = 0
            }else{
                birdMovement -= 40
            }
        }
    }

    value -= 1

    bars[0].style.marginLeft = value + 'px'

    if (bars[0].style.marginLeft == '0px') {
        createNewBar(area)
    }

    if (bars[0].style.marginLeft == '-80px') {
        bars[0].remove()
        value = 150
        initialScore++
        score.innerHTML = `&nbsp${initialScore}`
    }

}

//creating 2 bars in begin of the game

createNewBar(document.querySelector('.gameArea'))
createNewBar(document.querySelector('.gameArea'))

// loop of the game

var buttonStart = document.querySelector('.buttonStart')
var buttonPause = document.querySelector('.buttonPause')
var score = document.querySelector('.score')

var value = 150

var startGame
var playerMovement
var gameIsRunning = false

var start = function () {
    startGame = setInterval(gameLooping, 10)
    gameIsRunning = true
}

var stop = function () {
    clearInterval(startGame)
    gameIsRunning = false
}

buttonStart.addEventListener('click', event => {
    if(gameIsRunning==false){
        start()
    } 
})

buttonPause.addEventListener('click', event => {
    stop()
})