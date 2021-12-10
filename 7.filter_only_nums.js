//Given an array, return a new array that only includes the numbers.


let arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]


function nums(n) {
    let num_arr = arr.filter(function(i) {
        if (typeof i === "number") {
            return i
        }
    });
    return num_arr
}

console.log(nums(arr))














