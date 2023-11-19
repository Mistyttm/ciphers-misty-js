const { trifid } = require('../src/ciphers');

describe('Trifid', function () {
    describe('Encode', function () {
        describe('Keyword: felixmardstbcghjknopquvwyz+', function () {
            describe('Groupsize: 7', function() {
                it('Should return "cytegwfczappuypqtvfsuyxeasgklqb+mip"', function () {
                    assert.equal(trifid("the quick brown fox jumps over the lazy dog", "felixmardstbcghjknopquvwyz", 7, true), "cytegwfczappuypqtvfsuyxeasgklqb+mip");
                });
            })
            
        });
    });
    describe('Decode', function () {
        describe('Keyword: TEST', function () {
            describe('Keyword: felixmardstbcghjknopquvwyz+', function () {
                describe('Groupsize: 7', function() {
                    it('Should return "the quick brown fox jumps over the lazy dog"', function () {
                        assert.equal(trifid("cytegwfczappuypqtvfsuyxeasgklqb+mip", "felixmardstbcghjknopquvwyz", 7, true), "the quick brown fox jumps over the lazy dog");
                    });
                })
                
            });
        });
    });
});