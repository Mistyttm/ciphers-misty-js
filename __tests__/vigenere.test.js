import { vigenere } from "@ciphers";

test("vigenere cipher encode 'This is a test phrase' keyword: TEST", () => {
    expect(vigenere("This is a test phrase", "TEST", true)).toBe("Mlal bw s mxwl iavslx");
});

test("vigenere cipher decode 'This is a test phrase' keyword: TEST", () => {
    expect(vigenere("Mlal bw s mxwl iavslx", "TEST", false)).toBe("This is a test phrase");
});

test("vigenere cipher rejects 'This is a test phrase' keyword: test", () => {
    expect(vigenere("This is a test phrase", "test", false)).rejects;
});

test("vigenere cipher encode 'This is a test phrase' keyword: TESTING", () => {
    expect(vigenere("This is a test phrase", "TESTING", true)).toBe("Mlal qf g mikm xuxtww");
});
