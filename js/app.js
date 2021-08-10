// 100vh on mobile when adress bar is present
function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
}
window.addEventListener('resize', appHeight);
appHeight();

// added .is-open class on navigation
let toggler = document.querySelector('.toggler');
toggler.addEventListener('click', function(){
    toggler.classList.toggle('is-open');
});

// scroll to content when clicked on button
let scrollBtn = document.querySelector('.scrollBtn');
scrollBtn.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#main').scrollIntoView({ 
        behavior: 'smooth' 
      });
});

// fadeIn-fadeOut navbar when mobile navigation is opened 
$(document).ready(function(){
    $(".toggler").click(function(){
        $(".overlay").fadeToggle(400);
        $(".rightNav nav").fadeToggle(400);
    });
});

//hero image slider
var slideIndex = 0;
var slideIndexCurrent = 0;
showSlides();
//showSlidesCurrent(slideIndexCurrent);
function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);
}
/*** CURRENT SLIDE on click ***/
function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);
}
function showSlidesCurrent(n) {
  //var slideIndex = 1;
  var i;
  var slides = document.getElementsByClassName("hero");
  var dots = document.getElementsByClassName("circle");
  if (n > slides.length) {slideIndexCurrent = 1}   

  if (n < 0) {slideIndexCurrent = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexCurrent-1].style.display = "block";  
  dots[slideIndexCurrent-1].className += " active";
  slideIndexCurrent++;
}
/*** SHOW SLIDE with timer ***/
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("hero");
  var dots = document.getElementsByClassName("circle");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000);
}
//  showSlidesCurrent(slideIndexCurrent);