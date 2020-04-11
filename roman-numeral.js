const romans = new Map();

romans.set(1000, 'M');

romans.set(900, 'CM');
romans.set(500, 'D');
romans.set(400, 'CD');
romans.set(100, 'C');

romans.set(90, 'XC');
romans.set(50, 'L');
romans.set(40, 'XL');
romans.set(10, 'X');

romans.set(9, 'IX');
romans.set(5, 'V');
romans.set(4, 'IV');
romans.set(1, 'I');


const fromArabic = (arabic) => {
	let roman = '';

	romans.forEach((glyph, digit) => {
		while (arabic >= digit) {
			roman += glyph;
			arabic -= digit;
		}
	});

	return roman;
};

module.exports = fromArabic;