

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
