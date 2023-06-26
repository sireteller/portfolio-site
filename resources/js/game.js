// ERROR 404

const e404Dog1 = document.getElementById('e404-dog-1');
const e404Dog2 = document.getElementById('e404-dog-2');
const e404Dog3 = document.getElementById('e404-dog-3');
const e404Button1 = document.getElementById('e404-button-1');
const e404Button2 = document.getElementById('e404-button-2');
const e404Button3 = document.getElementById('e404-button-3');
const e404Div = document.getElementById('e404');
const dogAwakeDiv = document.getElementById('dog-awake');

e404Button1.onclick = () => {
    e404Dog1.style.display = 'none';
    e404Button1.style.display = 'none';
    e404Dog2.style.display = 'block';
    e404Button2.style.display = 'block';
}

e404Button2.onclick = () => {
    e404Dog2.style.display = 'none';
    e404Button2.style.display = 'none';
    e404Dog3.style.display = 'block';
    e404Button3.style.display = 'block';
}

e404Button3.onclick = () => {
    e404Div.style.display = 'none';
    dogAwakeDiv.style.display = 'grid';
}

// DOG AWAKE

const layingDog = document.getElementById('laying-dog');
const headDownDog = document.getElementById('head-down-dog');
const sittingDog = document.getElementById('sitting-dog');
const liftedDog = document.getElementById('lifted-dog');
const lift = document.getElementById('lift');
const sit = document.getElementById('sit');
const treat = document.getElementById('treat');
const dogAwakeButtonsContainer = document.getElementById('dog-awake-buttons-container');
const awakePara1 = document.getElementById('awake-1');
const awakePara2 = document.getElementById('awake-2');
const playButton = document.getElementById('play-button');
const introDiv = document.getElementById('intro');

lift.onclick = () => {
    layingDog.style.display = 'none';
    headDownDog.style.display = 'none';
    liftedDog.style.display = 'block';
    playButton.style.display = 'block';
    awakePara1.style.display = 'none';
    awakePara2.style.display = 'inline';
    dogAwakeButtonsContainer.style.display = 'none';
}

sit.onclick = () => {
    layingDog.style.display = 'none';
    headDownDog.style.display = 'block';
}

treat.onclick = () => {
    layingDog.style.display = 'none';
    headDownDog.style.display = 'none';
    sittingDog.style.display = 'block';
    playButton.style.display = 'block';
    awakePara1.style.display = 'none';
    awakePara2.style.display = 'inline';
    dogAwakeButtonsContainer.style.display = 'none';
}