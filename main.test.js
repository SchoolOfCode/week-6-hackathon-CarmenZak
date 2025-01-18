import { describe, test, expect } from "vitest";
import {secretNumber} from "./main.js";


describe("secretNumber function tests", () => {
    test("should return a number", () => {
        const actual = secretNumber(secretArray);
        expect(typeof actual).toBe('number');
    });

    test("should only accept positive numbers", () => {
        const actual = secretNumber(secretArray);
        expect(actual).toBeGreaterThan(0); //avoids issue of NaN and Infinity values
    });  

    test("should return NaN if only even numbers are in the array", () => {
        const evenArray = [2, 4, 6, 8, 10];
        const actual = secretNumber(evenArray);
        expect(actual).toBeNaN();
    });

    test("should return a 7 digit number", () => {
        const actual = secretNumber(secretArray);
        expect(actual.toString().length).toBe(7);
    });

    test("should return the odd numbers in the array", () => {
        const actual = secretNumber(secretArray);
        const expected = 1783995;
        expect(actual).toBe(expected);
        console.log(`Congratulations, you passed the test! Here is the secret portal code: ${expected}`);
        });

});











const secretArray = [17, -4, 83, 6, 20, 99, 5, -2];