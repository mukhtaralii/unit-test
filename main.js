const mylib = require('./mylib');

console.log('24 + 12 =', mylib.add(24, 12));
console.log('49 - 9 =', mylib.subtract(49, 9));
console.log('6 * 9 =', mylib.multiply(6, 9));
console.log('64 / 8', mylib.divide(64/8));

try {
    console.log('64 / 8 =', mylib.divide(64, 8));
    console.log('7 / 0 =', mylib.divide(7, 0)); 
    } catch (error) {
    console.error('Error:', error.message);
}

