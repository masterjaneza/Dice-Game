let winnerText = document.querySelector('.winnerText')
let firstDiceImg = document.querySelector('.firstDiceImg')
let secondDiceImg = document.querySelector('.secondDiceImg')

let imgArr = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png']

let firstRandomImg = Math.floor(Math.random() * imgArr.length)
let secondRandomImg = Math.floor(Math.random() * imgArr.length)

window.onload = function() {
    if(firstRandomImg === secondRandomImg){
        winnerText.textContent = 'TIE'

    }else if(firstRandomImg < secondRandomImg) { 
        firstDiceImg.src = imgArr[firstRandomImg]
        secondDiceImg.src = imgArr[secondRandomImg]
        winnerText.textContent = 'PLAYER 2 WIN'
    } else {
        firstDiceImg.src = imgArr[firstRandomImg]
        secondDiceImg.src = imgArr[secondRandomImg]
        winnerText.textContent = 'PLAYER 1 WIN'
    }
}   




// Shorter Version

// let [winnerText, firstDiceImg, secondDiceImg] = [document.querySelector('.winnerText'), document.querySelector('.firstDiceImg'), document.querySelector('.secondDiceImg')];
// let imgArr = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

// window.onload = () => {
//   let [firstRandomImg, secondRandomImg] = [Math.floor(Math.random() * imgArr.length), Math.floor(Math.random() * imgArr.length)];
//   firstDiceImg.src = imgArr[firstRandomImg];
//   secondDiceImg.src = imgArr[secondRandomImg];
//   winnerText.textContent = firstRandomImg === secondRandomImg ? 'TIE' : firstRandomImg < secondRandomImg ? 'PLAYER 2 WIN' : 'PLAYER 1 WIN';
// };
