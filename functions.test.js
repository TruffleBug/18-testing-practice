const { sum, capitalize, reverseString } = require('./functions.js');


test('donkey equals Donkey', () => {
    expect(capitalize('donkey')).toBe('Donkey');
});


test('donkey equal yeknod', () => {
    expect(reverseString('donkey')).toBe('yeknod');
});