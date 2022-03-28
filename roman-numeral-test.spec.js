const {expect} = require('chai');
const romanFromArabic = require('./roman-numeral');

const makeTest = (arabic, expected) => {
	return () => {
		expect(romanFromArabic(arabic)).to.equal(expected);
	}
};

describe('Roman numeral converter', () => {
	it('converts 0 to ""', makeTest(0, ''));
	it('converts 1 to I', makeTest(1, 'I'));
	it('converts 2 to II', makeTest(2, 'II'));
	it('converts 5 to V', makeTest(5, 'V'));
	it('converts 6 to VI', makeTest(6, 'VI'));
	it('converts 7 to VII', makeTest(7, 'VII'));
	it('converts 10 to X', makeTest(10, 'X'));
	it('converts 20 to XX', makeTest(20, 'XX'));
	it('converts 4 to IV', makeTest(4, 'IV'));
	it('converts 2020 to MMXX', makeTest(2020, 'MMXX'));
	it('converts 2020 to MMXXII', makeTest(2022, 'MMXXII'));
});