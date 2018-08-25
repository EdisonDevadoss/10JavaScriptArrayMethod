//Every
//This method check if all array's item passed the condition. If passed, it return 'true' otherwise 'false'.

const arr = [1, 2, 3, 4, 5, 6];

// all elements are greather than 4

const greatherFour = arr.every(num => num > 4);
console.log("greatherFour is:", greatherFour);

// all elements are less than 10?

const lessTen = arr.every(num => num < 10);
console.log("lessTen is:", lessTen);
