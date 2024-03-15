const user = {
    username : "vrushabh",
    age : 20,

    welcome : function(){
        console.log(this);
        console.log(this);
    }
    
}
user.welcome()
user.username = "anna"
user.welcome()
console.log(this);

