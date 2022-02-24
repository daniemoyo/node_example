// brings in whatever fileA specified for export, in this case the "subtract" function
var functionFromFileA = require('./fileA.js'); // we can assign a variable to it
var sum = require('./fileA.js');

// we just gained the "subtract" function from fileA.js!
var result = functionFromFileA.subtract(4,2);
var resultSum = sum.sum(4,2);

console.log(resultSum);
console.log(result);