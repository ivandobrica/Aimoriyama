// scroll to content when clicked on button
let scrollBtn = document.querySelector('.scroll-btn');
scrollBtn.addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector('#main').scrollIntoView({ 
		behavior: 'smooth'
	});
});