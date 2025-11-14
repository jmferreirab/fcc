/* 
User Stories:

You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.

The function should return true if the first string ends with the second string, and false otherwise.

You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this. 
*/

function confirmEnding(str, ending) {
  return str.slice(str.length - ending.length) === ending;
}
