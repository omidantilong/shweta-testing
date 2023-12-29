import { it, expect, describe } from 'vitest'
import { sum } from './example'

describe('sum', () => {

    it('adds two numbers', () => {

        expect(sum(2, 2)).toEqual(4)
        expect(sum(2, -2)).toEqual(0)
        expect(sum(0, 0)).toEqual(0)
    })

    it('returns the same value for one argument', () => {

        expect(sum(2)).toEqual(2)
    })

    it('Guards against invalid values', () => {

        expect(() => sum()).toThrowError('Invalid values')
        expect(() => sum('star', 'circle')).toThrowError('Invalid values')
        expect(() => sum('star', 3)).toThrowError('Invalid values')
    })

    //some other tests - test if you pass in a truw / false value, empty array or object, undefined value

})