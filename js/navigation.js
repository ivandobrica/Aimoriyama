// added .is-open class on navigation
let toggler = document.querySelector(".toggler");
toggler.addEventListener('click', function(){
    toggler.classList.toggle('is-open');
});


// fadeIn-fadeOut navbar when mobile navigation is opened 
$(document).ready(function(){
    $(".toggler").click(function(){
        $(".nav-overlay").fadeToggle(400);
        $(".nav-overlay__nav").fadeToggle(400);
        $(".main-nav__wrapper .lang").fadeToggle(400);
        $(".logo-inner").toggleClass("is-white");
    });
});

//check lang and add active class
let en = document.querySelectorAll(".en");
let ja = document.querySelectorAll(".ja");
if(window.location.href.indexOf("en-en") != -1) {
    for (let i=0; i < en.length; i++) {
        en.item(i).classList.add("is-active");
    }
} 
else {
    for (let i=0; i < ja.length; i++) {
        ja.item(i).classList.add("is-active");
    }
}