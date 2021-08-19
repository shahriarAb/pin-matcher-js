function sixDigitPin() {
    const pinGenerate = Math.round(Math.random() * 1000000);
    const pinLength = pinGenerate + ''; //make number to a string
    if (pinLength.length == 6) {
        return pinGenerate;
    }
    else {
        return sixDigitPin();
    }
}
function generatePin() {
    const pin = sixDigitPin();
    document.getElementById('display-pin').value = pin;
    document.getElementById('screen').value = '';
}
document.getElementById('key-pad').addEventListener('click', function (e) {
    const screen = document.getElementById('screen');
    const buttonText = e.target.innerText;
    if (isNaN(buttonText)) {
        if (buttonText == 'C') {
            screen.value = '';
        }
        else if (buttonText == '<') {
            screen.value = screen.value.slice(0, -1);
        }
    }
    else {
        screen.value += buttonText;
    }
});
function submitBtn() {
    document.getElementById('submit-btn').disabled = false;
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('screen').value;
    const wrongPin = document.getElementById('wrong-pin');
    const correctPin = document.getElementById('correct-pin');
    if (generatedPin == typedPin) {
        correctPin.style.display = 'block';
        wrongPin.style.display = 'none';
    }
    else {
        correctPin.style.display = 'none';
        wrongPin.style.display = 'block';
        const tryLeft = document.getElementById('try-left');
        tryLeft.innerText = parseInt(tryLeft.innerText) - 1;
        if(tryLeft.innerText == 0){
            document.getElementById('submit-btn').disabled = true;
        }
    }
}