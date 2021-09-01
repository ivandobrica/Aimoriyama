//parallax effect on followUs section
(function($) {
	/** change value here to adjust parallax level */
	let parallax = -0.3;

	let $bg_images = $(".parallax");
	let offset_tops = [];
	$bg_images.each(function(i, el) {
		offset_tops.push($(el).offset().top);
	});

	$(window).scroll(function() {
		let dy = $(this).scrollTop();
		$bg_images.each(function(i, el) {
			let ot = offset_tops[i];
			$(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
		});
	});
})(jQuery);