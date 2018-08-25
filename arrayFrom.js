//Array from()
//This change all thing that are array-like or iterable into true array especially when working with DOM, so that you can use other array methods like reduce, map,
//filter and so on.

const name = "EdisonDevadoss";
const newArray = Array.from(name);
console.log("newArray is:", newArray);

console.log("check name:", Array.isArray(name));
console.log("check newArray is:", Array.isArray(newArray));
