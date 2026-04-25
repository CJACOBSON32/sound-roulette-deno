import { expect, test } from "bun:test";

function add(a: number, b: number): number {
    return a + b;
}

test("addTest", () => {
    expect(add(2, 3)).toBe(5);
});
