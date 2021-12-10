// Given an array, return the sum of numbers that are 18 or over.

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]


function array_sum(arr) {
    let sum = arr.filter(function(i) {
        if (i >= 18) {
            return i
        }    
    });
    sum = sum.reduce((i,j) => i+j)
    return sum
}

console.log(array_sum(arr))