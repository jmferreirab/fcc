/*

See workshop details at https://www.freecodecamp.org/learn/javascript-v9/workshop-sentence-analyzer/step-1

*/

function getVowelCount(sentence) {
  const vowels = "aeiou";
  return sentence
    .toLowerCase()
    .split("")
    .reduce((acc, val) => acc + (vowels.includes(val) ? 1 : 0), 0);
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  return sentence
    .toLowerCase()
    .split("")
    .reduce((acc, val) => acc + (consonants.includes(val) ? 1 : 0), 0);
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuation = ".,!?:;";
  return sentence
    .toLowerCase()
    .split("")
    .reduce((acc, val) => acc + (punctuation.includes(val) ? 1 : 0), 0);
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  return sentence
    .toLowerCase()
    .split("")
    .reduce((acc, val) => acc + (" " === val ? 1 : 0), 1);
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
