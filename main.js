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
    if (artArray[1] === art2) {
        art1.style.justifyContent = 'end';
        art1.style.zIndex = '4';
        art1.style.filter = 'blur(8px)';
        
        art3.style.justifyContent = 'center';
        art3.style.zIndex = '6';
        art3.style.filter = 'none';

        art2.style.justifyContent = 'start';
        art2.style.zIndex = '4';
        art2.style.filter = 'blur(8px)';

        artArray = [art2, art3, art1];
    } else if (artArray[1] === art3) {
        art2.style.justifyContent = 'end';
        art2.style.zIndex = '4';
        art2.style.filter = 'blur(8px)';
        
        art1.style.justifyContent = 'center';
        art1.style.zIndex = '6';
        art1.style.filter = 'none';

        art3.style.justifyContent = 'start';
        art3.style.zIndex = '4';
        art3.style.filter = 'blur(8px)';

        artArray = [art3, art1, art2];
    } else if (artArray[1] === art1) {
        art3.style.justifyContent = 'end';
        art3.style.zIndex = '4';
        art3.style.filter = 'blur(8px)';
        
        art2.style.justifyContent = 'center';
        art2.style.zIndex = '6';
        art2.style.filter = 'none';

        art1.style.justifyContent = 'start';
        art1.style.zIndex = '4';
        art1.style.filter = 'blur(8px)';

        artArray = [art1, art2, art3];
    }
}

document.getElementById('arrow-left-art').onclick = function(){
    if (artArray[1] === art2) {
        art2.style.justifyContent = 'end';
        art2.style.zIndex = '4';
        art2.style.filter = 'blur(8px)';
        
        art1.style.justifyContent = 'center';
        art1.style.zIndex = '6';
        art1.style.filter = 'none';

        art3.style.justifyContent = 'start';
        art3.style.zIndex = '4';
        art3.style.filter = 'blur(8px)';

        artArray = [art3, art1, art2]
    } else if (artArray[1] === art1) {
        art1.style.justifyContent = 'end';
        art1.style.zIndex = '4';
        art1.style.filter = 'blur(8px)';
        
        art3.style.justifyContent = 'center';
        art3.style.zIndex = '6';
        art3.style.filter = 'none';

        art2.style.justifyContent = 'start';
        art2.style.zIndex = '4';
        art2.style.filter = 'blur(8px)';

        artArray = [art2, art3, art1]
    } else if (artArray[1] === art3) {
        art3.style.justifyContent = 'end';
        art3.style.zIndex = '4';
        art3.style.filter = 'blur(8px)';
        
        art2.style.justifyContent = 'center';
        art2.style.zIndex = '6';
        art2.style.filter = 'none';

        art1.style.justifyContent = 'start';
        art1.style.zIndex = '4';
        art1.style.filter = 'blur(8px)';

        artArray = [art1, art2, art3]
    }
}