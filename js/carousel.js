"use strict";
const leftArrow = document.querySelector(".left-arrow");
const leftArrowIcon = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".right-arrow");
const rightArrowIcon = document.querySelector(".fa-arrow-right");
const slider = document.querySelector(".slider");

function scrollRight() {
	if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
		slider.scrollTo({
			left: 0,
			behavior: "smooth"
		});
	} else {
		slider.scrollBy({
			left: window.innerWidth,
			behavior: "smooth"
		});
	}
}

function scrollLeft() {
	slider.scrollBy({
		left: -window.innerWidth,
		behavior: "smooth"
	});
}

// Auto slider
let timerId = setInterval(scrollRight, 7000);

function resetTimer() {
	clearInterval(timerId);
	timerId = setInterval(scrollRight, 7000);
}

// Scroll Events
slider.addEventListener("click", function (ev) {
	if ((ev.target === leftArrow) || (ev.target === leftArrowIcon)) {
		scrollLeft();
		resetTimer();
	}
});

slider.addEventListener("click", function (ev) {
	if ((ev.target === rightArrow) || (ev.target === rightArrowIcon)) {
		scrollRight();
		resetTimer();
	}
});
