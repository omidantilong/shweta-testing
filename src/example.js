export function sum(a, b) {

    if (!isNaN(a) && !b) {

        return a
    }

    if (isNaN(a) || isNaN(b)) {


        throw new Error('Invalid values')
    }



    return a + b
}
