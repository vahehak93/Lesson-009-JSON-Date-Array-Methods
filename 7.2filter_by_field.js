// Write a function which calculates average age of users.

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
    },
    {
    username: "Elon Musk",
    lang: "ENG",
    isAstronaut: false,
    },
];

function filterByField(users, field = "isAstronaut") {
    let astr = users.filter(function(i){
        if (i.isAstronaut === true) {
            return i
        }else {
            delete i.field
        }
        
    });
    return astr
}

console.log(filterByField(users))