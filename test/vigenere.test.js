const { vigenere } = require('../src/ciphers');
let assert = require('assert');

describe('Vigenere', function () {
    describe('Encode', function () {
        describe('Keyword: TEST', function () {
            it('Should return "Mlal bw s mxwl iavslx"', function () {
                assert.equal(vigenere("This is a test phrase", "TEST", true), "Mlal bw s mxwl iavslx");
            });
        });
        describe('Keyword: TESTING', function () {
            it('Should return "Mlal qf g mikm xuxtww"', function () {
                assert.equal(vigenere("This is a test phrase", "TESTING", true), "Mlal qf g mikm xuxtww")
            });
        });
    });
    describe('Decode', function () {
        describe('Keyword: TEST', function () {
            it('Should return "This is a test phrase"', function () {
                assert.equal(vigenere("Mlal bw s mxwl iavslx", "TEST", false), "This is a test phrase");
            });
        });
    });
});