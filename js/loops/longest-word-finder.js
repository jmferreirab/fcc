/* 
Build a Longest Word Finder App

User Stories: https://www.freecodecamp.org/learn/javascript-v9/lab-longest-word-in-a-string/build-a-longest-word-finder-app

*/

/**
 * Iterates over all words in a sentence that is space separated
 * to calculate the max word length.
 *
 * @param {string} sentence. The sentence to analyze.
 */
function findLongestWordLength(sentence) {
  if (!sentence) {
    return null;
  }

  let max_length = 0;
  for (const word of sentence.split(" ")) {
    if (word.length > max_length) {
      max_length = word.length;
    }
  }

  return max_length;
}

// let len = findLongestWordLength("The quick brown fox jumped over the lazy dog");
// console.log(len);
