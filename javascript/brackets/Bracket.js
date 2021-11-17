'use strict';
const { Stack } = require('./Stack')

function multiBrackets(str) {
    const stack = new Stack();
    if (str.length === 0 ){
    return false
    }
    const bracketsOpening = ['(', '[', '{']
    const bracketsClosing = [')', ']', '}']
    for (let i = 0; i < str.length; i++) {
        if (bracketsOpening.includes(str[i])) {
            stack.push(str[i]);
        } else if (bracketsClosing.includes(str[i])) {
            if (stack.top === null) {
                return false;
            }
            const lastBracket = stack.pop();
            const bracketIndex = bracketsOpening.indexOf(lastBracket);
            if (bracketsClosing[bracketIndex] !== str[i]) {
                return false;
            }
        }
    }
return true;
}

module.exports = multiBrackets