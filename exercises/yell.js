'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
let yell = function(string){
    return string.toUpperCase(string);
};

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.strictEqual(yell("it's over 9000!"), "IT'S OVER 9000!")
assert.strictEqual(yell("What, 9000?!"), "WHAT, 9000?!")

// End of tests */
