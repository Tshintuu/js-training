'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
let multiply = function(arg1, arg2){
    let cpt = 0;
    let result = 0;
    let multiplier = 0;
    let negative = false;
    if (arg1 >= 0){
	multiplier = arg1;
    }
    else {
	multiplier = -arg1;
	negative = true;
    }
    let count = function(n){
	if (n < multiplier){
	    result = result + arg2;
	    count(n + 1);
	}
	return result;
    }
    let finalResult = count(cpt);
    if (negative == true){
	finalResult = -finalResult;
    }
    return finalResult;
};
    
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
