;(function($) {
	$(window).load(function() {

		// Instantiate the absolute description element.

		$('body').append("<div id='cms-menu-descriptive'></div>");
		var element = $('#cms-menu-descriptive');

		// The timer to display the absolute description element correctly.

		var show;

		// Bind the mouse events dynamically.

		$.entwine('ss', function($) {

			// When the mouse enters the menu, display the absolute description element.

			$('#cms-menu ul.cms-menu-list-descriptive li').entwine({
				onmouseenter: function() {

					clearTimeout(show);

					// Retrieve the appropriate description.

					var description = $(this).find('div.descriptive-description').first();
					if(description.length) {

						// Update the absolute description element.

						element.hide();
						element.css({top: $(this).offset().top, left: $(this).width()});
						element.html(description.html());
						show = setTimeout(function() {

							element.fadeIn(250);
						}, 250);
					}
					else {
						element.stop(true).fadeOut(250);
					}
				}
			});

			// When the mouse leaves the menu, hide the absolute description element.

			$('#cms-menu ul.cms-menu-list-descriptive').entwine({
				onmouseleave: function() {

					clearTimeout(show);
					element.stop(true).fadeOut(250);
				}
			});
		});

	});
})(jQuery);
