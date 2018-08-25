//The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value - MDN
const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((total, value) => total + value, 0);

console.log("sum", sum);
