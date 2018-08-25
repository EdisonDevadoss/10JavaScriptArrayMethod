//This method create new array with only elements passed condition
//inside the provided function.

const arr = [1, 2, 3, 4, 5, 6];

//itme (s) greater than 3

const filtered = arr.filter(num => num > 3);
console.log("filtered", filtered);

console.log(arr);
