// Immediately invoked functin Expression (IIFE)
// chai is name iife
(function chai(){
    console.log("db connected");
})();
// this is not a name iife
(() =>{
    console.log("db connected 2");
})();
((name) =>{
    console.log(`db connected 2 ${name}`);
})("vrushabh");

   