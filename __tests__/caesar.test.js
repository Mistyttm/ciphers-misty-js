let cipher = require('../src/ciphers');
let assert = require('assert');

describe('Caesar', function () {
    describe('Encode', function () {
        describe('Key: 1', function () {
            it('Should return "bcd"', function () {
                expect(cipher.ceasar("abc", 1, true)).toBe("bcd");
            });

            it("should encode 'ABC' with shift 1", () => {
                expect(cipher.ceasar("ABC", 1, true)).toBe("BCD");
            });
    
            it("should encode 'abc ABC' with shift 1", () => {
                expect(cipher.ceasar("abc ABC", 1, true)).toBe("bcd BCD");
            });
    
            it("should encode 'xyz' with shift 1", () => {
                expect(cipher.ceasar("xyz", 1, true)).toBe("yza");
            });
    
            it("should encode 'XYZ' with shift 1", () => {
                expect(cipher.ceasar("XYZ", 1, true)).toBe("YZA");
            });
    
            it("should encode 'xyz XYZ' with shift 1", () => {
                expect(cipher.ceasar("xyz XYZ", 1, true)).toBe("yza YZA");
            });
        });
        describe('Key: 5', function () {
            it("should encode 'This is a test!' with shift 5", () => {
                expect(cipher.ceasar("This is a test!", 5, true)).toBe("Ymnx nx f yjxy!");
            });
        });
    });

    describe('Decode', function () {
        describe('Key: 1', function () {
            it('Should return "abc"', function () {
                expect(cipher.ceasar("bcd", 1, false)).toBe("abc");
            });

            it("should decode 'BCD' with shift 1", () => {
                expect(cipher.ceasar("BCD", 1, false)).toBe("ABC");
            });
    
            it("should decode 'bcd BCD' with shift 1", () => {
                expect(cipher.ceasar("bcd BCD", 1, false)).toBe("abc ABC");
            });
    
            it("should decode 'yza' with shift 1", () => {
                expect(cipher.ceasar("yza", 1, false)).toBe("xyz");
            });
    
            it("should decode 'YZA' with shift 1", () => {
                expect(cipher.ceasar("YZA", 1, false)).toBe("XYZ");
            });
    
            it("should decode 'yza YZA' with shift 1", () => {
                expect(cipher.ceasar("yza YZA", 1, false)).toBe("xyz XYZ");
            });
        });
        describe('Key: 5', function () {
            it("should decode 'Ymnx nx f yjxy!' with shift 5", () => {
                expect(cipher.ceasar("Ymnx nx f yjxy!", 5, false)).toBe("This is a test!");
            });
        });
    });
});
