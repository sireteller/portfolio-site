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