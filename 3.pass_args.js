// How to pass arguments in sum function?

function sum(x,y,z) {
    return x + y + z;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers))