$(document).ready(function() {
    //Pagination JS
    //how much items per page to show
    let show_per_page = 2; 
    //getting the amount of elements inside journal__blog-wrapper div
    let number_of_items = $('.journal__blog-wrapper').children().length;
    //calculate the number of pages we are going to have
    let number_of_pages = Math.ceil(number_of_items/show_per_page);
    
    //set the value of our hidden input fields
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);
    
    let navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
    let current_link = 0;
    while(number_of_pages > current_link){
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
        current_link++;
    }
    navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';
    
    $('.pagination').html(navigation_html);

    //add is-active class to the first page link
    $('.pagination .page_link:first').addClass('is-active');
    
    //hide all the elements inside journal__blog-wrapper div
    $('.journal__blog-wrapper').children().css('display', 'none');
    
    //and show the first n (show_per_page) elements
    $('.journal__blog-wrapper').children().slice(0, show_per_page).css('display', 'block');

    //default style for prev link
    $('.previous_link').addClass("is-disabled");
});


//Pagination JS

function previous(){
new_page = parseInt($('#current_page').val()) - 1;
    //if there is an item before the current active link run the function
    if($('.is-active').prev('.page_link').length==true){
        go_to_page(new_page);
        if($('#current_page').val() == 0) {
            $('.previous_link').addClass("is-disabled")
        }
        $('.next_link').removeClass("is-disabled")
    } 
}

function next(){
new_page = parseInt($('#current_page').val()) + 1;
    //if there is an item after the current active link run the function
    if($('.is-active').next('.page_link').length==true){
        go_to_page(new_page);
        if($('#current_page').val() == 1) {
            $('.next_link').addClass("is-disabled")
        }
        $('.previous_link').removeClass("is-disabled")
    } 
}

function go_to_page(page_num){
    //get the number of items shown per page
    let show_per_page = parseInt($('#show_per_page').val());
    //get the element number where to start the slice from
    start_from = page_num * show_per_page;
    //get the element number where to end the slice
    end_on = start_from + show_per_page;
    
    //hide all children elements of journal__blog-wrapper div, get specific items and show them
    $('.journal__blog-wrapper').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
    
    /*get the page link that has longdesc attribute of the current page and add is-active class to it
    and remove that class from previously active page link*/
    $('.page_link[longdesc=' + page_num +']').addClass('is-active').siblings('.is-active').removeClass('is-active');
    
    //update the current page input field
    $('#current_page').val(page_num);

    //disable prev/next buttons
    if($('#current_page').val() == 0) {
        $('.previous_link').addClass("is-disabled")
        $('.next_link').removeClass("is-disabled")
    }
    if($('#current_page').val() == 1) {
        $('.next_link').addClass("is-disabled")
        $('.previous_link').removeClass("is-disabled")
    }
}