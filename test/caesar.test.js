const { ceasar } = require('../src/ciphers');
let assert = require('assert');

describe('Caesar', function () {
    describe('Encode', function () {
        describe('Key: 1', function () {
            it('Should return "bcd"', function () {
                assert.equal(ceasar("abc", 1, true), "bcd");
            });

            it("should encode 'ABC' with shift 1", () => {
                assert.equal(ceasar("ABC", 1, true), "BCD");
            });
    
            it("should encode 'abc ABC' with shift 1", () => {
                assert.equal(ceasar("abc ABC", 1, true), "bcd BCD");
            });
    
            it("should encode 'xyz' with shift 1", () => {
                assert.equal(ceasar("xyz", 1, true), "yza");
            });
    
            it("should encode 'XYZ' with shift 1", () => {
                assert.equal(ceasar("XYZ", 1, true), "YZA");
            });
    
            it("should encode 'xyz XYZ' with shift 1", () => {
                assert.equal(ceasar("xyz XYZ", 1, true), "yza YZA");
            });
        });
        describe('Key: 5', function () {
            it("should encode 'This is a test!' with shift 5", () => {
                assert.equal(ceasar("This is a test!", 5, true), "Ymnx nx f yjxy!");
            });
        });
    });

    describe('Decode', function () {
        describe('Key: 1', function () {
            it('Should return "abc"', function () {
                assert.equal(ceasar("bcd", 1, false), "abc");
            });

            it("should decode 'BCD' with shift 1", () => {
                assert.equal(ceasar("BCD", 1, false), "ABC");
            });
    
            it("should decode 'bcd BCD' with shift 1", () => {
                assert.equal(ceasar("bcd BCD", 1, false), "abc ABC");
            });
    
            it("should decode 'yza' with shift 1", () => {
                assert.equal(ceasar("yza", 1, false), "xyz");
            });
    
            it("should decode 'YZA' with shift 1", () => {
                assert.equal(ceasar("YZA", 1, false), "XYZ");
            });
    
            it("should decode 'yza YZA' with shift 1", () => {
                assert.equal(ceasar("yza YZA", 1, false), "xyz XYZ");
            });
        });
        describe('Key: 5', function () {
            it("should decode 'Ymnx nx f yjxy!' with shift 5", () => {
                assert.equal(ceasar("Ymnx nx f yjxy!", 5, false), "This is a test!");
            });
        });
    });
});
