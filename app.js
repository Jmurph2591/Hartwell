//Hero Slider


//Variables
let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

//Functions


//Clear All Images
function resetSlideOrder() {
    for(let i=0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

//Initialize Slider
function startSlider() {
    resetSlideOrder();
    sliderImages[0].style.display = 'block';
}

//Show Previous Slide
function slideLeft(){
    resetSlideOrder();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

//SHow Next Slide
function slideRight() {
    resetSlideOrder();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

//Event Listener Left Arrow Click
arrowLeft.addEventListener('click', function(){
    if(current === 0 ){
        current = sliderImages.length;
    }
    slideLeft();
});

//Event Listener Right Arrow Click
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1
    }
    slideRight();
});

startSlider();

//scroll to top button

/*
$(function() {
const scrollToTop = $('#scrollToTop');

$(window).scroll(function() {
  if ($(this).scrollTop() > 20) {
    $('#scrollToTop').fadeIn();
  } else {
    $('#scrollToTop').fadeOut();
  }
});

$('#scrollToTop').click(function() {
  $('html').animate({scrollTop: '0'}, 100);
});
});
*/

//Get the button
let mybutton = document.querySelector(".scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.classList.add('fade');
  } else {
    mybutton.style.display = "none";
    mybutton.classList.remove('fade');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}