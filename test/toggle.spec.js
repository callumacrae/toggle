'use strict';

describe('Toggle', function () {
	beforeEach(function () {
		$('[data-toggle-name]').show();
	});

	it('should toggle stuff', function () {
		var $target = $('[data-toggle-name="abc"]');
		var $control = $('.test-one');

		$target.is(':visible').should.equal(true);
		$control.trigger('click');
		$target.is(':visible').should.equal(false);
		$control.trigger('click');
		$target.is(':visible').should.equal(true);
	});

	it('should hide stuff', function () {
		var $target = $('[data-toggle-name="abc"]');
		var $control = $('.test-two');

		$target.is(':visible').should.equal(true);
		$control.trigger('click');
		$target.is(':visible').should.equal(false);
		$control.trigger('click');
		$target.is(':visible').should.equal(false);
	});

	it('should show stuff', function () {
		var $target = $('[data-toggle-name="abc"]');
		var $control = $('.test-three');

		$target.is(':visible').should.equal(true);
		$control.trigger('click');
		$target.is(':visible').should.equal(true);
		$target.hide();
		$control.trigger('click');
		$target.is(':visible').should.equal(true);
	});

	it('should handle multiple toggles', function () {
		var $targetAbc = $('[data-toggle-name="abc"]');
		var $targetDe = $('[data-toggle-name="de"]');
		var $targetFghi = $('[data-toggle-name="fghi"]');
		var $control = $('.test-four');

		$control.trigger('click');
		$targetAbc.is(':visible').should.equal(false);
		$targetDe.is(':visible').should.equal(true);
		$targetFghi.is(':visible').should.equal(false);

		$control.trigger('click');
		$targetAbc.is(':visible').should.equal(true);
		$targetDe.is(':visible').should.equal(true);
		$targetFghi.is(':visible').should.equal(false);
	});

	it('should let you specify your own toggle function', function (cb) {
		toggles.toggle = function () {
			cb();
		};
		$('.test-one').trigger('click');
	});

	it('should let you specify your own hide function', function (cb) {
		toggles.hide = function () {
			cb();
		};
		$('.test-two').trigger('click');
	});

	it('should let you specify your own show function', function (cb) {
		toggles.show = function () {
			cb();
		};
		$('.test-three').trigger('click');
	});
});