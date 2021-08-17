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
    });
});