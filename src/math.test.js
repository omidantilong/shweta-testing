//Writing some tests based on the expected behaviour when adding two numbers 
//and then writing the critiia to perform the function in the example.js fine

import { it, expect, describe } from 'vitest'
import { sum } from './math'
import { subtract } from './math'

describe('sum', () => {

    it('adds two numbers', () => {

        expect(sum(2, 2)).toEqual(4)
        expect(sum(2, -2)).toEqual(0)
        expect(sum(0, 0)).toEqual(0)
    })

    it('returns the same value for one argument', () => {

        expect(sum(2)).toEqual(2)
        expect(sum(-3)).toEqual(-3)
    })

    it('Guards against invalid values', () => {
        const errorString = 'Invalid values'
        expect(() => sum()).toThrowError(errorString)
        expect(() => sum('star', 'circle')).toThrowError(errorString)
        expect(() => sum('star', 3)).toThrowError(errorString)
        expect(() => sum(true, 3)).toThrowError(errorString)
        expect(() => sum([], 3)).toThrowError(errorString)
        expect(() => sum({}, {})).toThrowError(errorString)
        expect(() => sum({}, undefined)).toThrowError(errorString)
    })



    //some other tests - test if you pass in a true / false value, empty array or object, undefined value

})
describe('subtract', () => {

    it('subtract the numbers', () => {

        expect(subtract(2, -1, 4)).toEqual(3)
        expect(subtract(0, 0, 0)).toEqual(0)
    })

    it('returns the same value for one argument', () => {

        expect(subtract(2)).toEqual(2)
        expect(subtract(-3)).toEqual(-3)
    })

}
)