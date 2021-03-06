//check if the user is on inner-pages
let current = window.location.pathname;
let header = document.querySelectorAll(".header");
if ((current !== '/index.html') & (current !== '/ja-ja/index.html') & (current !== '/Aimoriyama/index.html') & (current !== '/Aimoriyama/') & (current !== '/Aimoriyama/ja-ja/index.html')) {
	for (let i=0; i < header.length; i++) {
		header.item(i).classList.add("page__header");
	}
}

//check if first or last journal article
let articlePrev = document.querySelector(".article__prev");
let articleNext = document.querySelector(".article__next");
if ((current == '/en-en/journal/10.html') || (current == '/ja-ja/journal/10.html') || (current == '/Aimoriyama/en-en/journal/10.html') || (current == '/Aimoriyama/ja-ja/journal/10.html')) {
	articlePrev.classList.add("is-disabled");
} 
else if((current == '/en-en/journal/40.html') || (current == '/ja-ja/journal/40.html') || (current == '/Aimoriyama/en-en/journal/40.html') || (current == '/Aimoriyama/ja-ja/journal/40.html')) {
	articleNext.classList.add("is-disabled");
}

//fade-in animation js
(function() {
	let elements;
	let windowHeight;

	function init() {
		elements = document.querySelectorAll('.hidden');
		windowHeight = window.innerHeight;
	}

	function checkPosition() {
		for (let i = 0; i < elements.length; i++) {
			let element = elements[i];
			let positionFromTop = elements[i].getBoundingClientRect().top;

			if (positionFromTop - windowHeight <= 0) {
				element.classList.add('fade-in-element');
				element.classList.remove('hidden');
			}
		}
	}

	window.addEventListener('scroll', checkPosition);
	window.addEventListener('resize', init);

	init();
	checkPosition();
})();


//gallery drag cursor
jQuery(document).ready(function() {
	let mouseX = 0, mouseY = 0;
	let xp = 0, yp = 0;
		
	$(document).mousemove(function(e){
		mouseX = e.pageX - 15;
		mouseY = e.pageY - 15; 
	});
		
	setInterval(function(){
		xp += ((mouseX - xp)/6);
		yp += ((mouseY - yp)/6);
		$(".circle").css({left: xp +'px', top: yp +'px'});
	}, 20);
});


//parallax effect on images
let parallaxDown = document.querySelectorAll('.parallax-down');
new simpleParallax(parallaxDown, {
	orientation: 'down'
});
