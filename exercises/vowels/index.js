// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   const vols = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let letter of str.toLowerCase()) {
//     count += vols.includes(letter) ? 1 : 0;
//   }

//   return count;
// }

// function vowels(str) {
//   const vols = ['a', 'e', 'i', 'o', 'u'];
//   return str
//     .toLowerCase()
//     .split('')
//     .reduce((val, letter) => {
//       let newVal = val;
//       if (vols.indexOf(letter) > -1) {
//         newVal += 1;
//       }

//       return newVal;
//     }, 0);
// }
