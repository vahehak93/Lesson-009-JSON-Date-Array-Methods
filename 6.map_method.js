// Write a function which returns array of usernames.

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",},
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },
];

function usernames_array() {
    let obj_values = users.map(function(i){
        return i.username
    });
    return obj_values
}

console.log(usernames_array(users))



