'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
let keepFirst = function(string){
    return string.slice(0, 2);
};
let keepLast = function(string){
    return string.slice((string.length-2), string.length);
};
let keepFirstLast = function(string){
    return string.slice(2, 4);
};

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepFirst('abc'), 'ab')
assert.strictEqual(keepFirst('a, b, c'), 'a,')
assert.strictEqual(keepFirst('ab'), 'ab')
assert.strictEqual(keepFirst('I am your father'), 'I ')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepLast('abc'), 'bc')
assert.strictEqual(keepLast('a, b, c'), ' c')
assert.strictEqual(keepLast('ab'), 'ab')
assert.strictEqual(keepLast('Wololo'), 'lo')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.strictEqual(keepFirstLast('abcde'), 'cd')
assert.strictEqual(keepFirstLast('a, b, c, d, e'), ' b')
assert.strictEqual(keepFirstLast('abcd'), 'cd')
assert.strictEqual(keepFirstLast('Wololooo'), 'lo')
// End of tests */
