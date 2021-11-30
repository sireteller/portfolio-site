let zoomBox = document.getElementById('showcase-zoom');
let zoomedImg = document.getElementById('showcase-zoom-img');
let x = document.getElementById('showcase-zoom-close');
let artImg1 = document.getElementById('item-1');
let artImg2 = document.getElementById('item-2');
let artImg3 = document.getElementById('item-3');
let artImg4 = document.getElementById('item-4');
let artImg5 = document.getElementById('item-5');
let artImg6 = document.getElementById('item-6');
let artImg7 = document.getElementById('item-7');
let artImg8 = document.getElementById('item-8');
let artImg9 = document.getElementById('item-9');
let artImg10 = document.getElementById('item-10');
let artImgArray = [artImg1, artImg2, artImg3, artImg4, artImg5, artImg6, artImg7, artImg8, artImg9, artImg10];

let zoomImage = (event) => {
    zoomBox.style.display = 'grid';
    zoomedImg.src = event.target.src;
}

let closeFunc = () => {
    zoomBox.style.display = 'none';
}

x.onclick = closeFunc;

for (i = 0; i < artImgArray.length; i++) {
    artImgArray[i].onclick = zoomImage;
}