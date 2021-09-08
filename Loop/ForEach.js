const numbers = [10, "Amaka", 2, "Destiny", 6, "Hope", 60]

numbers.forEach((number) => {
    // console.log(number * 2)
    // console.log(number > 20 ? number * 2 : null)
    let result = typeof(number) != "number" ? number : null
    // console.log(result);
})
let filt = numbers.filter(number => {
    return  typeof(number) != "number" ? number : null
})
console.log(filt)