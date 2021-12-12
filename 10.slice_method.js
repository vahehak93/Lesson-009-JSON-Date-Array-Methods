// *Implement these array methods

// slice

const array1 = ['&', 'a', 'b', 'c', "m", 10, true, null];

function slice_method(array, start = 0, end = 0) {

    let new_arr = [];
    if ((start < 0 && end < 0)) {
        if (start === -(array.length)) {
            start = 0
        } else if (end === -1) {
            end = (array.length)
        } else {
            start = Math.abs(1-start)
            end = Math.abs(1-end)
        }
    }
    if ((start >= 0 && end < 0)) {
        if (end === -1) {
            end = (array.length)
        }else {
            end = Math.abs(1-end)
        }
    } 
    if ((start <= 0 && end > 0)) {
        if (start === -(array.length)) {
            start = 0
        }else {
            start = Math.abs(1-start)
        }
    }
    
    
    if (start < 0) {
        if (start === -(array.length)) {
            start = 0
        }else {
            start = Math.abs(1-start)
        }
    }
    
    if (end < 0) {
        if (end === -1) {
            end = (array.length)
        }else {
            end = Math.abs(1-end)
        }
    } 
    
    


    if ((start === undefined && end === undefined) || (start > (array.length-1) && end === undefined)) {
        return new_arr
    } else if ((isNaN(start) && isNaN(end)) || (isNaN(start) === false && isNaN(end))) {
        return new_arr
    } else if ((Math.abs(start) >= Math.abs(end)) && start < end) {
        return new_arr
    } else {
        for (let i = 0; i < array.length; i++) {
            if ((isNaN(start) && (isNaN(end) === false))) {
                array.length = end
                new_arr.push(array[i])
            } else if ((isNaN(start) === false && isNaN(end) === false)) {
                if (start > (array.length-1) && end > (array.length-1)) {
                    return new_arr
                } else if (start < (array.length-1) && end > (array.length-1)) {
                    i = start
                    end = array.length
                    new_arr.push(array[i])
                } else if (start < (array.length-1) && end < (array.length-1)) {
                    i = start
                    array.length = end
                    new_arr.push(array[i])
                    
                }
            }  
        }
    }
    return new_arr
}


console.log(slice_method(array1,2,5))
console.log(array1.slice(2,3))
