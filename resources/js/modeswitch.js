// LIGHT MODE / DARK MODE

let modeSheet = document.getElementById('modesheet');

const setToLight = () => {
    modeSheet.href = './resources/css/lightmode.css';
}

const setToDark = () => {
    modeSheet.href = './resources/css/darkmode.css';
}

document.getElementById('sun').onclick = setToLight;

document.getElementById('moon').onclick = setToDark;