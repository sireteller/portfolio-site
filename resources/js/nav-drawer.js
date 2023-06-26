//SMALL NAV TRIGGER

const smallNavArrowClose = document.getElementById('small-nav-arrow-close');
const smallNavArrowBoxClose = document.getElementById('small-nav-arrow-box-close');
const smallNavArrowOpen = document.getElementById('small-nav-arrow-open');
const smallNavArrowBoxOpen = document.getElementById('small-nav-arrow-box-open');
const smallNavLinks = document.getElementById('small-nav-links');
const smallNav = document.getElementById('small-nav');

smallNavArrowBoxOpen.onmouseover = function() {
    smallNavArrowOpen.style.animation = 'none';
    smallNavArrowOpen.style.position = 'static';
}

smallNavArrowBoxOpen.onclick = function() {

    smallNavArrowOpen.style.animation = 'none';
    smallNavArrowOpen.style.position = 'static';
    smallNavArrowBoxOpen.style.display = 'none';
    smallNav.style.display = 'grid';

    setTimeout(() => {
        smallNavArrowClose.style.right = '0%';
        smallNavArrowBoxClose.style.right = '0%';
        smallNavLinks.style.right = '0%';
        smallNavArrowClose.style.transform = 'rotate(180deg)';
    }, 50);
    
}

smallNavArrowBoxClose.onclick = function() {
    smallNavArrowClose.style.right = '500%';
    smallNavArrowBoxClose.style.right = '500%';
    smallNavLinks.style.right = '100%';
    smallNavArrowClose.style.transform = 'rotate(0deg)';

    setTimeout(() => {
        smallNav.style.display = 'none';
        smallNavArrowBoxOpen.style.display = 'flex';
    }, 800);
}
