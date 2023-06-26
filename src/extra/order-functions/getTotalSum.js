export function getTotalSum(arr) {
    const totalSum = arr.reduce((acc, el) => {
        acc += (el.count * el.price)
        return acc
    }, 0)
    return totalSum
}