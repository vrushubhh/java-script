const myobject = {
    one:"1",
    two:"2",
    three:"3"
}
for (const key in myobject) {
        // console.log(key);
    
}

// const coding =["js","pyton","cpp","java"]

// coding.forEach((item) =>{
//     console.log(item);
// })

const coding =["js","pyton","cpp","java"]

 const value = coding.forEach((item) =>{
    // console.log(item);
})
console.log(value);

const mynumber = [ 1,2,3,4,5,6,7,8,9]

const newNum = mynumber
                        .map((num) => num*1)
                        .map((num) => num +1)
                        .filter((num) =>num = 40)

                        console.log(newNum);
            
