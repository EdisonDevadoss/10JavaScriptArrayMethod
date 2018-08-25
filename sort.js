//sort
//This method used to arrange/sort array's item either ascending or descending order.

const arr = [1, 2, 3, 4, 5, 6];
const alpha = ["e", "a", "c", "u", "y"];

//sort in descending order
let descOrder = arr.sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log("descOrder is:", descOrder);

// sort in ascending descOrder
let ascOrder = alpha.sort((a, b) => (a > b ? 1 : -1));
console.log("ascOrder is:", ascOrder);
