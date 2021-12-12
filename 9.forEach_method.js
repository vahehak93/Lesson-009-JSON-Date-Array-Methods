// *Implement these array methods

// forEach


const array1 = ['&', 'a', 'b', 'c', 5, 10, true, null];

function forEach_method(array, cbfunc) {
    for (let i = 0; i < array.length; i++) {
        if (cbfunc(array[i])) {
            console.log(array[i])
        }
        
    }
    return undefined
}

array1.forEach(function(number) {
        console.log(number);
    });

console.log(forEach_method(array1, function(el) {
    return el
}))
