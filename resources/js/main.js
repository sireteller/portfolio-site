//SMALL NAV TRIGGER

const smallNavArrow = document.getElementById('small-nav-arrow');
const smallNavArrowBox = document.getElementById('small-nav-arrow-box');
const smallNav = document.getElementById('small-nav-links');
smallNav.style.right = '100%';

smallNavArrowBox.onmouseover = function() {
    smallNavArrow.style.animationPlayState = 'paused';
}

smallNavArrowBox.onmouseleave = function() {
    smallNavArrow.style.animationPlayState = 'running';
}

smallNavArrowBox.onclick = function() {

    smallNavArrow.style.animation = 'none';
    smallNavArrow.style.position = 'static';

    if (smallNav.style.right === '100%') {
        smallNavArrow.style.right = '0%';
        smallNavArrowBox.style.right = '0%';
        smallNav.style.right = '0%';
        smallNavArrow.style.transform = 'rotate(180deg)';
    } else {
        smallNavArrow.style.right = '500%';
        smallNavArrowBox.style.right = '500%';
        smallNav.style.right = '100%';
        smallNavArrow.style.transform = 'rotate(0deg)';
    }
}

//ABOUT ME PICTURE SWITCH

let drawing = document.getElementById('drawing');
let photo = document.getElementById('photo');
let drawingSwitch = document.getElementById('drawing-switch');
let photoSwitch = document.getElementById('photo-switch');

drawingSwitch.onclick = function() {
    photo.style.display = 'flex';
    drawingSwitch.style.right = '10000px';
    photoSwitch.style.right = '0';
    drawing.style.left = '10000px';

    setTimeout(() => {
    photo.style.right = '0';
    }, 100);

    setTimeout(() => {
    drawing.style.display = 'none';
    }, 200);
}

photoSwitch.onclick = function() {
    drawing.style.display = 'flex';
    drawingSwitch.style.right = '0';
    photoSwitch.style.right = '10000px';
    photo.style.right = '10000px';

    setTimeout(() => {
    drawing.style.left = '0';
    }, 100);

    setTimeout(() => {
    photo.style.display = 'none';
    }, 200);
}

let smallDrawing = document.getElementById('drawing-small');
let smallPhoto = document.getElementById('photo-small');
let smallDrawingSwitch = document.getElementById('drawing-switch-small');
let smallPhotoSwitch = document.getElementById('photo-switch-small');

smallDrawingSwitch.onclick = function() {
    smallPhoto.style.display = 'flex';
    smallDrawingSwitch.style.right = '10000px';
    smallPhotoSwitch.style.right = '0';
    smallDrawing.style.left = '10000px';

    setTimeout(() => {
    smallPhoto.style.right = '0';
    }, 100);

    setTimeout(() => {
    smallDrawing.style.display = 'none';
    }, 200);
}

smallPhotoSwitch.onclick = function() {
    smallDrawing.style.display = 'flex';
    smallDrawingSwitch.style.right = '0';
    smallPhotoSwitch.style.right = '10000px';
    smallPhoto.style.right = '10000px';

    setTimeout(() => {
    smallDrawing.style.left = '0';
    }, 100);

    setTimeout(() => {
    smallPhoto.style.display = 'none';
    }, 200);
}

// RETURN TO DEFAULT ON WINDOW RESIZE TO AVOID ISSUES WITH THE WRONG IMAGE STAYING BEHIND

window.onresize = function() {
    smallDrawing.removeAttribute('style');
    smallDrawingSwitch.removeAttribute('style');
    smallPhoto.removeAttribute('style');
    smallPhotoSwitch.removeAttribute('style');

    drawing.removeAttribute('style');
    photo.removeAttribute('style');
    drawingSwitch.removeAttribute('style');
    photoSwitch.removeAttribute('style');
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

    if(!window.matchMedia('(max-width: 1024px)').matches) {
        zoomBox.style.display = 'grid';
        zoomedImg.src = event.target.src;
    }
}

let closeFunc = () => {
    zoomBox.style.display = 'none';
}

x.onclick = closeFunc;
zoomBox.onclick = closeFunc;

for (i = 0; i < artImgArray.length; i++) {
    artImgArray[i].onclick = zoomImage;
}

// FORM RESUBMISSION BLOCKER

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }