'use strict';

var $ = require('jquery');

$(document).on('click', '[data-toggle-target]', function (e) {
	e.preventDefault();

	handleToggles($(this).data('toggle-target'));
});

function handleToggles(input) {
	if (!$.isArray(input)) {
		return handleToggles(input.split(' '));
	}

	$.each(input, function (i, item) {
		item = item.split(':');

		if (item.length === 1) {
			item.unshift('toggle');
		}

		toggles[item[0]].call(null, getElement(item[1]));
	});
}

function getElement(toggleName) {
	return $('[data-toggle-name~="' + toggleName + '"]');
}

var toggles = {
	toggle: function ($element) {
		$element.toggle();
	},
	hide: function ($element) {
		$element.hide();
	},
	show: function ($element) {
		$element.show();
	}
};

// Sorry about this :(
if (window.testing) {
	window.$ = window.jQuery = $;
}

window.toggles = module.exports = toggles;
