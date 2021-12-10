// Write a function which parses string integers. If it's not possible to
// parse, then add null

let arr = ["10", "5", "abc", "15", "^y", "0x1001"]

function parse_int(arr) {
    // for (let i = 0; i < arr.length, i++) {

    // }
    let new_arr = arr.map(function(i) {
        if (isNaN(i) === false) {
            return parseInt(i)
        }else {
            return null
        }
        
    });
    return new_arr
}

console.log(parse_int(arr))
