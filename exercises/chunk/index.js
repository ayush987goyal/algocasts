// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  let i = 0;

  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  }

  return result;
}

module.exports = chunk;

// function chunk(array, size) {
//   let i = 0;
//   let result = [];

//   while (i < array.length) {
//     let small = [];
//     for (let j = i; j < i + size; j++) {
//       if (!array[j]) break;

//       small.push(array[j]);
//     }
//     result.push(small);
//     i = i + size;
//   }

//   return result;
// }

// function chunk(array, size) {
//   const result = [];

//   for (let element of array) {
//     const last = result[result.length - 1];

//     if (!last || last.length === size) {
//       result.push([element]);
//     } else {
//       result[result.length - 1].push(element);
//     }
//   }

//   return result;
// }
