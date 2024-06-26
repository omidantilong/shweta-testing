//Writing some tests based on the expected behaviour when adding two numbers
//and then writing the critiia to perform the function in the example.js fine

import { it, expect, describe } from "vitest"
import { sum, subtract, square, sumAll, mulAll, subAll } from "./example"
const errorString = "Invalid values"

describe("sum", () => {
    //Happy path tests
    it("adds two numbers", () => {
        expect(sum(2, 2)).toEqual(4)
        expect(sum(2, -2)).toEqual(0)
        expect(sum(0, 0)).toEqual(0)
    })

    it("returns the same value for one argument", () => {
        expect(sum(2)).toEqual(2)
        expect(sum(-3)).toEqual(-3)
    })

    it("Guards against invalid values", () => {
        //Error handling
        expect(() => sum()).toThrowError(errorString)
        expect(() => sum("star", "circle")).toThrowError(errorString)
        expect(() => sum("star", 3)).toThrowError(errorString)
        expect(() => sum(true, 3)).toThrowError(errorString)
        expect(() => sum([], 3)).toThrowError(errorString)
        expect(() => sum({}, {})).toThrowError(errorString)
        expect(() => sum({}, undefined)).toThrowError(errorString)
    })

    //some other tests - test if you pass in a true / false value, empty array or object, undefined value
})
describe("subtract", () => {
    it("subtract the numbers", () => {
        expect(subtract(2, -1, 4)).toEqual(3)
        expect(subtract(0, 0, 0)).toEqual(0)
    })

    it("returns the same value for one argument", () => {
        expect(subtract(2)).toEqual(2)
        expect(subtract(-3)).toEqual(-3)
    })

    it("Guards against invalid values", () => {
        const errorString1 = "Invalid values"
        expect(() => subtract()).toThrowError(errorString1)
        expect(() => subtract("star", "circle", 3)).toThrowError(errorString1)
        expect(() => subtract("star", 3, 2)).toThrowError(errorString1)
        expect(() => subtract(true, 3, false)).toThrowError(errorString1)
        expect(() => subtract([], 3, 5)).toThrowError(errorString1)
        expect(() => subtract({}, {}, 8)).toThrowError(errorString1)
        expect(() => subtract({}, undefined, 7)).toThrowError(errorString1)
    })
})
describe("square", () => {
    it("Squares two numbers", () => {
        expect(square(-2)).toEqual(4)
    })

    it("Guards against invalid values", () => {
        const errorString1 = "Too many values"
        expect(() => square()).toThrowError(errorString)
    })

    it("Guards against too many values", () => {
        const errorString1 = "Too many values"
        expect(() => square("star", "circle")).toThrowError(errorString1)
        expect(() => square(3, 3)).toThrowError(errorString1)
    })
})

describe("sumAll", () => {
    it("Adds all the numbers", () => {
        expect(sumAll(1, 2, 3, "ring", 5, "square")).toEqual(11)
    })
})

describe.only("mulAll", () => {
    it("Multiplies all the numbers", () => {
        expect(mulAll(1, 2, 3, 5)).toEqual(30)
    })

    it("Guards against invalid values", () => {
        //expect(mulAll(1, 2, 3, 'ring', 5, 'square')).toThrowError(errorString)
        expect(() => mulAll(1, 2, 3, "ring", 5, "square")).toThrowError(errorString)
    })
})

describe("subAll", () => {
    it("Calculates the difference between all the numbers", () => {
        expect(subAll(-10, 1, 3, 6)).toEqual(-20)
    })
    it("Guards against invalid values", () => {
        expect(() => subAll(1, 2, 3, "ring", 5, "square")).toThrowError(errorString)
    })
})
