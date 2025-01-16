import { test, expect } from "vitest";
import {secretNumber} from "./main.js";

// MVP 1 - write a test that checks the number returned is 17,83,99,5
const secretArray = [17, -4, 83, 6, 20, 99, 5, -2];

//MVP 2 - test for non-integer 

test("should return the odd numbers in the array", () => {
    const actual = secretNumber(secretArray);
    const expected = '1783995';
    expect(actual).toBe(expected);
});