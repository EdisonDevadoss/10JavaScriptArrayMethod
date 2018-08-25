//This method create new array by calling the provided function in every element.
const arr = [1, 2, 3, 4, 5, 6];

// add one to every element.
const oneAdded = arr.map(num => num + 1);
console.log("oneAdded", oneAdded);

console.log(arr);
