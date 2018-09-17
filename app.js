const pageWrapper = document.querySelector('.page-wrapper');
const mobileMenu = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('header');
const gallery = document.querySelector('.gallery-grid');
const overlay = document.querySelector('.gallery-overlay');
const overlayImg = document.querySelector('.gallery-image');




//Event Listeners

mobileMenu.addEventListener('click', showMenu);
pageWrapper.addEventListener('click', hideMenu);
gallery.addEventListener('click', showImg);
overlay.addEventListener('click', removeOverlay);


//Event Handlers
function showMenu(){
    navMenu.classList.toggle('show-menu');
    pageWrapper.classList.toggle('show-menu'); 
}

function hideMenu(e){ 
        navMenu.classList.remove('show-menu'); 
        pageWrapper.classList.remove('show-menu');

}


function showImg(e){
  if(e.target.classList == 'gallery-photo'){
    overlay.classList.add('show-overlay');
  }
    //get src attribute from e.target & set to overlay image
    let val = e.target.getAttribute('src');
    overlayImg.setAttribute('src', val);
    //get alt attribute from e.target & set to overlay image
    let imgAlt = e.target.getAttribute('alt');
    overlayImg.setAttribute('alt', imgAlt);
    //get title attribute from e.target & set to overlay image
    let imgTitle = e.target.getAttribute('title');
    overlayImg.setAttribute('title', imgTitle);

   e.preventDefault();  
}

function removeOverlay(){
        overlay.classList.remove('show-overlay');  
}