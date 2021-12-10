// Write a function which returns array of lengths of user names

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",},
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },
];

function username_length() {
    let name_lenth = users.map(function(i){
        return i.username.length
    });
    return name_lenth
}

console.log(username_length(users))