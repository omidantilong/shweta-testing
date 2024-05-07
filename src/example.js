export function sum(a, b) {
    if (typeof a === "number" && !b) {
        return a
    }

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Invalid values")
    }

    return a + b
}

export function subtract(x, y, z) {
    if (typeof x === "number" && !y && !z) {
        return x
    }

    if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
        throw new Error("Invalid values")
    }

    return z - x - y
}

export function square(d) {
    if (arguments.length > 1) {
        throw new Error("Too many values")
    }
    if (typeof d !== "number") {
        throw new Error("Invalid values")
    }

    return d * d
}
// //re-write this for sub, multiplication etc
export function sumAll(...numbers) {
    let f = 0
    numbers.forEach((number) => {
        if (typeof number === "number") {
            f += number
        }
    }) //if this can be written in a more concise way
    return f
}

export function mulAll(...numbers) {
    //throw new Error('Invalid values')
    let g = 1
    const returnObject = {
        g: 1,
        invalidValues: [],
    }
    numbers.forEach((num) => {
        if (typeof num === "number") {
            returnObject.g *= num
        } else {
            //console.log('error')
            throw new Error("Invalid values") //write a function that takes inputs, and return the sum and print the invalid values or return an object that wraps in the sum and invalid values
        }
    })
    return returnObject.g
}

export function subAll(...numbers) {
    const g = numbers.reduce((accumulator, currentValue) => accumulator - currentValue)
    //Need to write a statement to catch invalid values
    //numbers.reduce(subtract)
    return g
}
// how will this work for subtraction - try the reduce function
