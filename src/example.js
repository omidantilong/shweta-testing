

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
    if (typeof d !== 'number') {
        throw new Error('Invalid values')
    }
    if (typeof d !== 'number'
        //&& e !== 'number'
    ) {
        throw new Error('Too many values') //Shouldn't this line throw an error because 'e' is not defined in the function?
    }
    return d * d
}
