const assert = require('assert');
const toPairs = require('./');

describe('toPairs', () => {
	it('can convert an object into pairs', () => {
		assert.deepEqual(toPairs({one: 1, two: 2}), [['one', 1], ['two', 2]]);
	});

	it('can convert an object into pairs even when one of them is "length"', () => {
		assert.deepEqual(toPairs({one: 1, two: 2, length: 3}), [['one', 1], ['two', 2], ['length', 3]]);
	});
});
