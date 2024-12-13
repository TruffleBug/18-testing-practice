function capitalize(string) {
    if(string.length == 0) return string
    return string[0].toUpperCase() + string.slice(1)
};

function reverseString(string) {
    if(string.length == 0) return string
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i]
    }
    return reverseString
};

const calculator = {
    add: function(num1, num2) {
        if(!num1) return null
        if(!num2) return num1
        return num1 + num2
    },

    subtract: function(num1, num2) {
        if(!num1) return null
        if(!num2) return num1
        return num1 - num2
    },

    multiply: function(num1, num2) {
        if(!num1) return null
        if(!num2) return num1
        return num1 * num2
    },

    divide: function(num1, num2) {
        if(!num1 || num2 == 0) return null
        if(!num2) return num1
        return num1 / num2
    },
};

function caesarCipher(string, shift) {
    if (string.length == 0) return string;

    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const capsAlphabetArray = JSON.parse(JSON.stringify(alphabetArray).toUpperCase());
    const alphabetArrayMod = JSON.parse(JSON.stringify(alphabetArray));
    const shiftedAlphabet = alphabetArrayMod.concat(alphabetArrayMod.splice(0, shift));
    
    const cipher = Array.prototype.map.call(string, (char) => {
        if(char.toLowerCase() === char.toUpperCase()) return char;

        if(alphabetArray.includes(char)) {
            const indexOfAlphabet = alphabetArray.indexOf(char);
            return shiftedAlphabet[indexOfAlphabet];
        } else {
            const indexOfAlphabet = capsAlphabetArray.indexOf(char);
            return shiftedAlphabet[indexOfAlphabet].toUpperCase();
        }
    }).join('');

    return cipher;
};

function analyzeArray(array) {
    if(!array || array.length == 0) return null;

    const average = Math.round((array.reduce((total, current) => {
        return total + current;
    }, 0)/array.length) * 100) / 100;

    const min = Math.min(...array);

    const max = Math.max(...array);

    const length = array.length;

    return {
        average,
        min,
        max,
        length
    };
};

module.exports = { 
    capitalize,
    reverseString,
    calculator, 
    caesarCipher, 
    analyzeArray
};