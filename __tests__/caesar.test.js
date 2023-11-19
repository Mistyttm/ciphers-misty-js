import { ceasar } from "../src/ciphers";

test("ceasar cipher encode 'abc' shift 1", () => {
    expect(ceasar("abc", 1, true)).toBe("bcd");
});

test("ceasar cipher encode 'ABC' shift 1", () => {
    expect(ceasar("ABC", 1, true)).toBe("BCD");
});

test("ceasar cipher encode 'abc ABC' shift 1", () => {
    expect(ceasar("abc ABC", 1, true)).toBe("bcd BCD");
});

test("ceasar cipher encode 'xyz' shift 1", () => {
    expect(ceasar("xyz", 1, true)).toBe("yza");
});

test("ceasar cipher encode 'XYZ' shift 1", () => {
    expect(ceasar("XYZ", 1, true)).toBe("YZA");
});

test("ceasar cipher encode 'xyz XYZ' shift 1", () => {
    expect(ceasar("xyz XYZ", 1, true)).toBe("yza YZA");
});

test("ceasar cipher encode 'This is a test!' shift 5", () => {
    expect(ceasar("This is a test!", 5, true)).toBe("Ymnx nx f yjxy!");
});
