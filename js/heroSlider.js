//hero image slider
let slideIndex = 0;
let slideIndexCurrent = 0;
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
	let i;
	let slides = document.getElementsByClassName("banner__hero");
	let dots = document.getElementsByClassName("loader__circle");
	if (n > slides.length) {slideIndexCurrent = 1}

	if (n < 0) {slideIndexCurrent = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" is-active", "");
	}
	slides[slideIndexCurrent-1].style.display = "block";
	dots[slideIndexCurrent-1].className += " is-active";
	slideIndexCurrent++;
}
/*** SHOW SLIDE with timer ***/
function showSlides() {
	let i;
	let slides = document.getElementsByClassName("banner__hero");
	let dots = document.getElementsByClassName("loader__circle");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" is-active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " is-active";
	setTimeout(showSlides, 8000);
}
//  showSlidesCurrent(slideIndexCurrent);
