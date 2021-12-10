// Write a function which remove users with language equals to 'ru'.

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",},
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },
];

function remove_ru(users) {
    let new_obj = users.filter(function(i){
        if (i.lang === "ru") {
            delete i.lang
            
        }else {
            return i
        }
        
    });
    return new_obj
}

console.log(remove_ru(users))
