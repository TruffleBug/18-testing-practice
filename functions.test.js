const { 
    capitalize, 
    reverseString, 
    calculator, 
    caesarCipher,
    analyzeArray
} = require('./functions.js');

describe('capitalize function', () => {
    test('emptry string', () => {
        expect(capitalize('')).toBe('');
    });
    
    test('normal', () => {
        expect(capitalize('donkey')).toBe('Donkey');
    });

    test('all caps', () => {
        expect(capitalize('DONKEY')).toBe('DONKEY');
    });

    test('single letter', () => {
        expect(capitalize('d')).toBe('D');
    });
});


describe('reverseString function', () => {
    test('empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('normal', () => {
        expect(reverseString('donkey')).toBe('yeknod');
    });

    test('single letter', () => {
        expect(reverseString('d')).toBe('d');
    });
});


describe('calculator functions', () => {
    test('positive numbers (addition)', () => {
        expect(calculator.add(2.5, 3.6)).toBe(6.1);
    });

    test('negative numbers (addition)', () => {
        expect(calculator.add(-5, -9)).toBe(-14);
    });

    test('missing one input (addition)', () => {
        expect(calculator.add(2)).toBe(2);
    });

    test('missing both inputs (addition)', () => {
        expect(calculator.add()).toBe(null);
    });

    test('positive numbers (subtraction)', () => {
        expect(calculator.subtract(6, 9)).toBe(-3);
    });

    test('negative numbers (subtraction)', () => {
        expect(calculator.subtract(-6, 9)).toBe(-15);
    });

    test('missing one input (subtraction)', () => {
        expect(calculator.subtract(2)).toBe(2);
    });

    test('missing both inputs (subtraction)', () => {
        expect(calculator.subtract()).toBe(null);
    });

    test('positive numbers (multiplication)', () => {
        expect(calculator.multiply(6, 9)).toBe(54);
    });

    test('negative numbers (multiplication)', () => {
        expect(calculator.multiply(-6, 9)).toBe(-54);
    });

    test('missing one input (multiplication)', () => {
        expect(calculator.multiply(2)).toBe(2);
    });

    test('missing both inputs (multiplication)', () => {
        expect(calculator.multiply()).toBe(null);
    });

    test('positive numbers (division)', () => {
        expect(calculator.divide(9, 2)).toBe(4.5);
    });

    test('negative numbers (division)', () => {
        expect(calculator.divide(9, -2)).toBe(-4.5);
    });

    test('missing one input (division)', () => {
        expect(calculator.divide(2)).toBe(2);
    });

    test('missing both inputs (division)', () => {
        expect(calculator.divide()).toBe(null);
    });

    test('divide by zero (division)', () => {
        expect(calculator.divide(9, 0)).toBe(null);
    });
});

describe('caesarCipher function', () => {
    test('empty string', () => {
        expect(caesarCipher('', 3)).toBe('');
    });

    test('normal no space', () => {
        expect(caesarCipher('zebra', 7)).toBe('gliyh');
    });

    test('with numbers & punctuation', () => {
        expect(caesarCipher('!donkey5z', 7)).toBe('!kvurlf5g');
    });

    test('with space', () => {
        expect(caesarCipher('donkey7! lla4?ma', 7)).toBe('kvurlf7! ssh4?th');
    });

    test('with capitalization', () => {
        expect(caesarCipher('DONKey5 68*llAma2?', 7)).toBe('KVURlf5 68*ssHth2?');
    });

    test('all numbers or punctuation', () => {
        expect(caesarCipher('92 8*-541.', 7)).toBe('92 8*-541.');
    });
});

describe.only('analyzeArray function', () => {
    test('empty array', () => {
        expect(analyzeArray([])).toBe(null);
    });

    test('single number (average)', () => {
        expect(analyzeArray([8])).toHaveProperty('average', 8);
    });

    test('positive numbers (average)', () => {
        expect(analyzeArray([4, 8, 5])).toHaveProperty('average', 5.67);
    });
    
    test('positive & negative numbers (average)', () => {
        expect(analyzeArray([4, 8, -5])).toHaveProperty('average', 2.33);
    });   

    test('single number (min)', () => {
        expect(analyzeArray([8])).toHaveProperty('min', 8);
    });

    test('positive numbers (min)', () => {
        expect(analyzeArray([4, 8, 5])).toHaveProperty('min', 4);
    });
    
    test('positive & negative numbers (min)', () => {
        expect(analyzeArray([4, 8, -5])).toHaveProperty('min', -5);
    }); 

    test('single number (max)', () => {
        expect(analyzeArray([2])).toHaveProperty('max', 2);
    });

    test('positive numbers (max)', () => {
        expect(analyzeArray([4, 8, 5])).toHaveProperty('max', 8);
    });
    
    test('positive & negative numbers (max)', () => {
        expect(analyzeArray([4, 8, -5])).toHaveProperty('max', 8);
    }); 
    
    test('single number (length)', () => {
        expect(analyzeArray([2])).toHaveProperty('length', 1);
    });

    test('positive numbers (length)', () => {
        expect(analyzeArray([4, 8, 5])).toHaveProperty('length', 3);
    });
    
    test('positive & negative numbers (length)', () => {
        expect(analyzeArray([4, 8, -5, 5.6])).toHaveProperty('length', 4);
    }); 

    test('output style', () => {
        expect(analyzeArray([4, 8.2, -5.6])).toEqual({
            average: 2.2,
            min: -5.6,
            max: 8.2,
            length: 3
        });
    }); 
});