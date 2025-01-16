import { describe, test, expect } from "vitest";
import {secretNumber} from "./main.js";

// MVP 1 - write a failing test then alter the test to check the number returned is 1783995


//MVP 2 - test for non-integer values

describe("secretNumber function tests", () => {
    test("should return a number", () => {
        const actual = secretNumber(secretArray);
        expect(typeof actual).toBe('number');
    });

    test("should return the odd numbers in the array", () => {
    const actual = secretNumber(secretArray);
    const expected = 1783995;
    expect(actual).toBe(expected);
    });

    test("should return NaN if only even numbers are in the array", () => {
        const evenArray = [2, 4, 6, 8, 10];
        const actual = secretNumber(evenArray);
        expect(actual).toBeNaN();
    });

    test("should only accept positive numbers", () => {
        const actual = secretNumber(secretArray);
        expect(actual).toBeGreaterThan(0); //avoids issue of NaN and Infinity values
    });

    test("should test for non-integer values", () => {
        const mixedValueSecretArray = [17, "hello", 83, 6.5, -20, 99, 5, true];
        const actual = secretNumber(mixedValueSecretArray);
        const expected = 1783995; 
        expect(actual).toBe(expected);
        });
        

    test("should return a 7 digit number", () => {
        const actual = secretNumber(secretArray);
        expect(actual.toString().length).toBe(7);
    });

});


const secretArray = [17, -4, 83, 6, 20, 99, 5, -2];