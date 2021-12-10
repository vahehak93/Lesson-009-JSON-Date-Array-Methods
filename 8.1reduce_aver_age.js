// Write a function which calculates average age of users.

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54
    },
];

function getAverageAge(users) {
    let aver_age = users.reduce(function(i,j) {
        return (i.age + j.age)/2
    });
    return aver_age
}

console.log(getAverageAge(users))