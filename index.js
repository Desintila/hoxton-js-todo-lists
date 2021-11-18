console.log("users: ", users);
console.log("todos: ", todos);
let alertUser= ''
for (const user of users){
    alertUser = alertUser +(`Hello user with id ${user.id}, name ${user.name} from ${user.address.city}\n`)
}
alert(alertUser)
let alertToDo= ''
const userInput = Number(prompt("Write an user id from 1 to 10?"))
if(userInput<0 || userInput>10){
    alert("Not a valid number")
}
for(const userToDO of users){
for( const todo of todos){
    if(userInput==todo.userId && userInput==userToDO.id){
        alertToDo = alertToDo +(`${userToDO.username}. Your To Do list: ${todo.title}\n`)
    }
}}
alert(alertToDo)