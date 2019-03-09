'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */
let capitalize = function(string){
    let firstLetter = string.slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    let rest = string.slice(1, string.length);
    rest = rest.toLowerCase();
    return firstLetter + rest;
};

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
