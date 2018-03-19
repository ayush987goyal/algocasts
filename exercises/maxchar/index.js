// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxValue = 0;
  let result = '';
  const obj = {};

  for (const letter of str) {
    // if (letter in obj) {
    //   obj[letter] += 1;
    // } else {
    //   obj[letter] = 1;
    // }
    obj[letter] = obj[letter] + 1 || 1;

    if (obj[letter] > maxValue) {
      maxValue = obj[letter];
      result = letter;
    }
  }

  return result;
}

module.exports = maxChar;
