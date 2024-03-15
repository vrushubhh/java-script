for (let index = 0; index <= 10; index++) {
    const element = index;
    if(index==5){
        // console.log("here");
    }
    // console.log(element);
    
}

for (let i = 0; i < 10; i++) {
    // console.log(`the inner loop ${i}`);

    for (let j = 0; j < 10; j++) {
        // console.log(`the outer loop ${j} the inner loop${i}`);
        
    }
    
}
let arr = ["vrushabh","chiku","anna"]

let myarr = 0
while(myarr < arr.length){
    // console.log(`the value of ${arr[myarr]}`);
    myarr = myarr +1

}
let score = 11
do{
    // console.log(`the score is ${score}`);
    score++

}
while(score<=10)

const arrays = [20,30,40,50]

for (const vrushu of arrays){
    console.log(`print the array ${vrushu}`);
}

const greet = "hello vrushabh"

for (const vrush of greet){
    console.log(`the string is print ${vrush}`);
}


const map = new Map()
map.set('ind',"india")
map.set('aus',"australia")
map.set('fr',"france")

console.log(map);

// for(const key of map ){
//     console.log(key);
// }

for(const [key] of map ){
    console.log(key);
}

