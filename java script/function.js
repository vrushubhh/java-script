function method(num1, num2){
    // console.log(num1+num2);

}
const result = method(3,5)
// console.log(result);

function loginuser(user = "anna"){
    if(user===undefined){
       console.log("please eneter your name");
       return

    }
    return `${user} is junt now`


}

// console.log(loginuser("vrushabh"));
console.log(loginuser());

const user = {
    username : "vrushabh",
    age : 20
}

    function anyobject(object){
        console.log(`user name is ${object.username} and age is ${object.age}`);
    }

    anyobject(user)


if(true){
    const username = "vrushabh"
    if(username =="vrushabh"){
        const website = "google"
        console.log(username + website);

    }
    // they are not execute becouse they are out of the scope
    // console.log(website);


}
// console.log(username);