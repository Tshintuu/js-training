'use strict'

/*
 * Create a `words` function that takes a string
 * and return an array of each words using space as a delimiter
 *
 */
let words = function(string){
    let result = [];
    let word = "";
    for (let i=0; i < string.length; i++){
	if (string[i] == " "){
	    result.push(word);
	    word = "";
	}
	else{
	    word = word + string[i];
	}
    }
    result.push(word);
    return result;
};

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof words, 'function')
assert.strictEqual(words.length, 1)
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ])
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ])
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
