/*- Create a function that takes an array of numbers arr, a string str
and return an array of numbers as per the following rules:
- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order.
``` javascript
sortBy([4, 3, 2, 1], "Asc" ) // [1, 2, 3, 4]
sortBy([7, 8, 11, 66]) // [7, 8, 11, 66]
sortBy([7, 8, 11, 66], "Desc") // [66, 11, 8, 7]*/

function arr_sort_asc(arr) {
    return arr.sort(function(i,j){return i-j});     
}


function arr_sort_desc(arr) {
    return arr.sort(function(i,j){return j-i});     
}

let arr = [2,1,4,3];
console.log("Original array is: ",arr)
console.log("Sorted by ascending order: ",arr_sort_asc([2,1,4,3]))
console.log("Sorted by descending order: ",arr_sort_desc([2,1,4,3]))