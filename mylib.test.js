const chai = require('chai');
const expect = chai.expect;
const mylib = require('../src/mylib');

describe('mylib', () => {
    
    before('Before testing starts', () => console.log('Before testing starts'));
    it('Return the sum of two numbers', () => {
        expect(mylib.add(24, 12)).to.equal(36);
    });

    it('Return the difference of two numbers', () => {
        expect(mylib.subtract(49, 9)).to.equal(40);
    });

    it('Return the product of two numbers', () => {
        expect(mylib.multiply(6, 9)).to.equal(54);
    });

    it('Return the result of division', () => {
        expect(mylib.divide(64, 8)).to.equal(8);
    });

    it('Dividing by Zero should result in error', () => {
        expect(() => mylib.divide(17, 0)).to.throw('ZeroDivision');
    });
    after('After testing starts', () => console.log('After testing starts'));
});
