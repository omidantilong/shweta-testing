

export function sum(a, b) {

    if (typeof a === 'number' && !b) {

        return a
    }

    if (typeof a !== 'number' || typeof b !== 'number') {


        throw new Error('Invalid values')
    }



    return a + b
}

export function subtract(x, y, z) {

    if (typeof x === 'number' && !y && !z) {
        return x
    }

    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
        throw new Error('Invalid values')
    }

    return z - x - y
}

export function square(d) {
    if (arguments.length > 1) {
        throw new Error('Too many values')
    }
    if (typeof d !== 'number') {
        throw new Error('Invalid values')
    }

    return d * d
}
// //re-write this for sub, multiplication etc
export function sumAll(...numbers) {
    let f = 0
    numbers.forEach((number) => {
        if (typeof number === 'number') {
            f += number
        }
    }) //if this can be written in a more concise way
    return f
}
