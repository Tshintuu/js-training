'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
let jadenCase = function(string){
    let word = "";
    let wordList = [];
    for(let i = 0; i < string.length; i++){
	if (string[i] == " "){
	    wordList.push(word);
	    word = "";
	}
	else {
	    word = word + string[i]
	}
    }
    wordList.push(word);
    let firstLetter = "";
    let rest = "";
    let result = "";
    for(let i = 0; i < wordList.length; i++){
	firstLetter = wordList[i].slice(0, 1);
	firstLetter = firstLetter.toUpperCase();
	rest = wordList[i].slice(1, wordList[i].length);
	rest = rest.toLowerCase();
	result = result + (firstLetter + rest);
	if (i != (wordList.length - 1)){
	    result = result + " ";
	}
    }
    return result;
};


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('abc'), 'Abc')
assert.strictEqual(jadenCase('a b c'), 'A B C')
assert.strictEqual(jadenCase('YAY YAY YAY'), 'Yay Yay Yay')
assert.strictEqual(jadenCase('Cross off the day'), 'Cross Off The Day')

// End of tests */
