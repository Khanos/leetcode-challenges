import romanToInt from './index.js';

describe('romanToInt', () => {
	// it('should fail - This is just for debuggin', () => {
	// 	expect(true).toBe(false);
	// });

	it('romanToInt("III") should be 3', () => {
		expect(romanToInt("III")).toBe(3);
	});

	it('romanToInt("IV") should be 4', () => {
		expect(romanToInt("IV")).toBe(4);
	});

	it('romanToInt("IX") should be 9', () => {
		expect(romanToInt("IX")).toBe(9);
	});

	it('romanToInt("LVIII") should be 58', () => {
		expect(romanToInt("LVIII")).toBe(58);
	});

	it('romanToInt("MCMXCIV") should be 1994', () => {
		expect(romanToInt("MCMXCIV")).toBe(1994);
	});
});