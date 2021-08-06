let toggler = document.querySelector('.toggler');

toggler.addEventListener('click', function(){
    toggler.classList.toggle('is-open');

});


$(document).ready(function(){
    $(".toggler").click(function(){
        $(".overlay").fadeToggle(200);
    });
});