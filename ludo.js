// JavaScript Math

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imageSource = 'img/' + randomNumber + '.png';
    document.getElementById('ludo').src = imageSource ;
}
