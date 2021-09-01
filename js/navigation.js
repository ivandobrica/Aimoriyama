// added .is-open class on navigation
let toggler = document.querySelector(".toggler");
toggler.addEventListener("click", function () {
	toggler.classList.toggle("is-open");
});

// fadeIn-fadeOut navbar when mobile navigation is opened
$(document).ready(function () {
	$(".toggler").click(function () {
		$(".nav-overlay").fadeToggle(400);
		$(".nav-overlay__nav").fadeToggle(400);
		$(".main-nav__wrapper .lang").fadeToggle(400);
		$(".logo-inner").toggleClass("is-white");
	});
});

//check  if the user is on inner-pages and add active classes
let en = document.querySelectorAll(".en");
let ja = document.querySelectorAll(".ja");
if (
	(current !== "/index.html") &
	(current !== "/ja-ja/index.html") &
	(current !== "/Aimoriyama/index.html") &
	(current !== "/Aimoriyama/") &
	(current !== "/Aimoriyama/ja-ja/index.html")
) {
	if (window.location.href.indexOf("ja-ja") != -1) {
		for (let i = 0; i < ja.length; i++) {
			ja.item(i).classList.add("is-active-black");
		}
	} else {
		for (let i = 0; i < en.length; i++) {
			en.item(i).classList.add("is-active-black");
		}
	}
} else {
	if (window.location.href.indexOf("ja-ja") != -1) {
		for (let i = 0; i < ja.length; i++) {
			ja.item(i).classList.add("is-active");
		}
	} else {
		for (let i = 0; i < en.length; i++) {
			en.item(i).classList.add("is-active");
		}
	}
}

//change overlay image
let aboutLink = document.querySelector(".about-link");
let kurumeLink = document.querySelector(".kurume-link");
let toursLink = document.querySelector(".tours-link");
let journalLink = document.querySelector(".journal-link");
let shopLink = document.querySelector(".shop-link");
let contactLink = document.querySelector(".contact-link");
let overlayImage = document.querySelector(".nav-overlay__image");

aboutLink.addEventListener("mouseover", function () {
	overlayImage.classList.add("about-img");
});
aboutLink.addEventListener("mouseout", function () {
	overlayImage.classList.remove("about-img");
});

kurumeLink.addEventListener("mouseover", function () {
	overlayImage.classList.add("kurume-img");
});
kurumeLink.addEventListener("mouseout", function () {
	overlayImage.classList.remove("kurume-img");
});

toursLink.addEventListener("mouseover", function () {
	overlayImage.classList.add("tours-img");
});
toursLink.addEventListener("mouseout", function () {
	overlayImage.classList.remove("tours-img");
});

journalLink.addEventListener("mouseover", function () {
	overlayImage.classList.add("journal-img");
});
journalLink.addEventListener("mouseout", function () {
	overlayImage.classList.remove("journal-img");
});

contactLink.addEventListener("mouseover", function () {
	overlayImage.classList.add("contact-img");
});
contactLink.addEventListener("mouseout", function () {
	overlayImage.classList.remove("contact-img");
});

shopLink.addEventListener("mouseover", function () {
	overlayImage.classList.add("shop-img");
});
shopLink.addEventListener("mouseout", function () {
	overlayImage.classList.remove("shop-img");
});
