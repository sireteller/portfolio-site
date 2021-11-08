//ABOUT ME PICTURE SWITCH

let drawing = document.getElementById('drawing');
let photo = document.getElementById('photo');
let drawingSwitch = document.getElementById('drawing-switch');
let photoSwitch = document.getElementById('photo-switch');

drawingSwitch.onclick = function() {
    drawingSwitch.style.right = '10000px';
    photoSwitch.style.right = '0';
    photo.style.right = '25%';
    drawing.style.left = '10000px';
}

photoSwitch.onclick = function() {
    drawingSwitch.style.right = '0';
    photoSwitch.style.right = '10000px';
    photo.style.right = '10000px';
    drawing.style.left = '25%';
}

//BEST WORKS CAROUSEL
//ARTWORKS

let art1 = document.getElementById('art-1-container');
let art2 = document.getElementById('art-2-container');
let art3 = document.getElementById('art-3-container');
let artArray = [art1, art2, art3];

document.getElementById('arrow-right-art').onclick = function(){
    let left = artArray[0];
    let middle = artArray[1];
    let right = artArray[2];

    artArray[0].style.justifyContent = 'end';
    artArray[0].style.zIndex = '4';
    artArray[0].style.filter = 'blur(8px)';
        
    artArray[2].style.justifyContent = 'center';
    artArray[2].style.zIndex = '6';
    artArray[2].style.filter = 'none';

    artArray[1].style.justifyContent = 'start';
    artArray[1].style.zIndex = '4';
    artArray[1].style.filter = 'blur(8px)';

    artArray = [middle, right, left];
}

document.getElementById('arrow-left-art').onclick = function(){
    let left = artArray[0];
    let middle = artArray[1];
    let right = artArray[2];

    artArray[1].style.justifyContent = 'end';
    artArray[1].style.zIndex = '4';
    artArray[1].style.filter = 'blur(8px)';
        
    artArray[0].style.justifyContent = 'center';
    artArray[0].style.zIndex = '6';
    artArray[0].style.filter = 'none';

    artArray[2].style.justifyContent = 'start';
    artArray[2].style.zIndex = '4';
    artArray[2].style.filter = 'blur(8px)';

    artArray = [right, left, middle];
}

// BEST WORKS ZOOM

let zoomBox = document.getElementById('zoom-box');
let zoomedImg = document.getElementById('zoomed-img');
let x = document.getElementById('close');
let artImg1 = document.getElementById('art-1');
let artImg2 = document.getElementById('art-2');
let artImg3 = document.getElementById('art-3');
let artImgArray = [artImg1, artImg2, artImg3];

let zoomImage = (event) => {
    zoomBox.style.display = 'flex';
    zoomedImg.src = event.target.src;
}

let closeFunc = () => {
    zoomBox.style.display = 'none';
}

x.onclick = closeFunc;

artImgArray[0].onclick = zoomImage;
artImgArray[1].onclick = zoomImage;
artImgArray[2].onclick = zoomImage;

// LIGHT MODE / DARK MODE

let modeSwitch = document.getElementById('mode-switch');

modeSwitch.onclick = function() {
    if (modeSwitch.innerHTML === 'Light Mode') {
        modeSwitch.innerHTML = 'Dark Mode';
        document.getElementById('modesheet').href = 'lightmode.css';
    } else if (modeSwitch.innerHTML === 'Dark Mode') {
        modeSwitch.innerHTML = 'Light Mode';
        document.getElementById('modesheet').href = 'darkmode.css';
    }
}