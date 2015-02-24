'use strict';

describe('Tests', function () {
	it('should function', function () {
		(10).should.be.above(2);
	});

	it('should have everything it needs', function () {
		toggles.should.be.type('object');
	});
});
