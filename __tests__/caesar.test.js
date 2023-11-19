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

test("ceasar cipher decode 'bcd' shift 1", () => {
    expect(ceasar("bcd", 1, false)).toBe("abc");
});

test("ceasar cipher decode 'BCD' shift 1", () => {
    expect(ceasar("BCD", 1, false)).toBe("ABC");
});

test("ceasar cipher decode 'bcd BCD' shift 1", () => {
    expect(ceasar("bcd BCD", 1, false)).toBe("abc ABC");
});

test("ceasar cipher decode 'yza' shift 1", () => {
    expect(ceasar("yza", 1, false)).toBe("xyz");
});

test("ceasar cipher decode 'YZA' shift 1", () => {
    expect(ceasar("YZA", 1, false)).toBe("XYZ");
});

test("ceasar cipher decode 'yza YZA' shift 1", () => {
    expect(ceasar("yza YZA", 1, false)).toBe("xyz XYZ");
});

test("ceasar cipher decode 'Ymnx nx f yjxy!' shift 5", () => {
    expect(ceasar("Ymnx nx f yjxy!", 5, false)).toBe("This is a test!");
});
