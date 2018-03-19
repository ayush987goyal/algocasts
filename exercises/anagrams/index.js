// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const strA = stringA.replace(/[^\w]/gi, '').toLowerCase();
//   const arrB = stringB
//     .replace(/[^\w]/gi, '')
//     .toLowerCase()
//     .split('');

//   for (let letter of strA) {
//     const index = arrB.indexOf(letter);
//     if (index > -1) {
//       arrB.splice(index, 1);
//     }
//   }

//   return arrB.length === 0;
// }

// function anagrams(stringA, stringB) {
//   const charMapA = makeCharMap(stringA);
//   const charMapB = makeCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (let letter in charMapA) {
//     if (charMapA[letter] !== charMapB[letter]) {
//       return false;
//     }
//   }

//   return true;
// }

// function makeCharMap(str) {
//   const obj = {};

//   for (let letter of str.replace(/[^\w]/g, '').toLowerCase()) {
//     obj[letter] = obj[letter] + 1 || 1;
//   }

//   return obj;
// }
