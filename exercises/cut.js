'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
let cutFirst = function(string){
    return string.slice(2);
};
let cutLast = function(string){
    return string.slice(0, (string.length)-2);
};
let cutFirstLast = function(string){
    return string.slice(2, (string.length)-2);
};
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutFirst('abc'), 'c')
assert.strictEqual(cutFirst('a, b, c'), ' b, c')
assert.strictEqual(cutFirst('ab'), '')
assert.strictEqual(cutFirst('I am your father'), 'am your father')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutLast('abc'), 'a')
assert.strictEqual(cutLast('a, b, c'), 'a, b,')
assert.strictEqual(cutLast('ab'), '')
assert.strictEqual(cutLast('Wololo'), 'Wolo')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.strictEqual(cutFirstLast('abcde'), 'c')
assert.strictEqual(cutFirstLast('a, b, c, d, e'), ' b, c, d,')
assert.strictEqual(cutFirstLast('abcd'), '')
assert.strictEqual(cutFirstLast('Wololooo'), 'lolo')
// End of tests */
