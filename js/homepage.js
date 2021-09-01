//check if the user is on homepage
let logoInner = document.querySelector(".logo-inner");
let navLinks = document.querySelectorAll(".main-nav__item a");
let navLang = document.querySelector(".lang");
let langLinks = document.querySelectorAll(".lang__item");
let togglerButton = document.querySelector(".toggler");
if ((current == '/index.html') || (current == '/ja-ja/index.html') || (current == '/Aimoriyama/ja-ja/index.html') || (current == '/Aimoriyama/index.html') || (current == '/Aimoriyama/')) {
	logoInner.classList.add("logo-white");
	navLang.classList.add("lang-white");
	togglerButton.classList.add("toggler-transparent");
	for (let i=0; i < langLinks.length; i++) {
		langLinks.item(i).classList.add("lang-white");
	}
	for (let i=0; i < navLinks.length; i++) {
		navLinks.item(i).classList.add("main-nav__links");
	}
	
	$(window).scroll(function() {    
		let scroll = $(window).scrollTop();
		if (scroll !== 0) {
			$(".main-nav").addClass("is-scrolled");
		} 
		else {
			$(".main-nav").removeClass("is-scrolled");
		}
	});
}