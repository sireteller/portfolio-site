// LIGHT MODE / DARK MODE

let modeSheet = document.getElementById('modesheet');

document.getElementById('sun').onclick = function() {
    modeSheet.href = './resources/css/lightmode.css';
}

document.getElementById('moon').onclick = function() {
    modeSheet.href = './resources/css/darkmode.css'
}