const myarr = [1,2,3,4,5,6];
// console.log(myarr);

myarr.push(9)
myarr.pop()

myarr.unshift(10)
myarr.shift()
console.log(myarr.includes(9));
console.log(myarr.indexOf(3));
// console.log(myarr);

// aaray ko string mai convert kiya hai

const newarr= myarr.join()

console.log(myarr);
console.log(newarr)
console.log(typeof newarr)

console.log("A", myarr);
const myarr1 = myarr.slice(1,3)
console.log(myarr1);
console.log("B",myarr)

const myarr2 = myarr.splice(1,3)
console.log(myarr2);
console.log("c",myarr);




