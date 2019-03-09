'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
let whisper = function(string){
    return "*" + string.toLowerCase(string) + "*";
};

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper('a'), '*a*')
assert.strictEqual(whisper('A'), '*a*')
assert.strictEqual(whisper('A B C'), '*a b c*')
assert.strictEqual(whisper('GET TO THE CHOPPER'), '*get to the chopper*')

// End of tests */
