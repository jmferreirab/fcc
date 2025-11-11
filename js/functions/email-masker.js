/* 
In this lab, you will mask the username part of an email address with asterisks. Masking is a term used to hide or replace sensitive information with asterisks or other characters.

For example, if the email address was myEmail@email.com, then the masked email address will be m*****l@email.com.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Create a function named maskEmail that takes email as an argument.
Inside the function, you should mask the email and append the domain name to it. Remember that you can use methods like slice, repeat, indexOf or even replace to help you.
Outside the function, declare a variable named email to store the email address you want to mask.
Call the maskEmail function with the email variable and output the result to the console.
maskEmail("apple.pie@example.com") should return "a*******e@example.com".
maskEmail("freecodecamp@example.com") should return "f**********p@example.com".
maskEmail("info@test.dev") should return "i**o@test.dev".
maskEmail("user@domain.org") should return "u**r@domain.org". 
*/


/**
 * Masks an email address by obscuring most of the username.
 * - Validates that `email` is a string containing '@'
 * - Ensures username and domain parts are non-empty
 * - For usernames longer than 3 chars, keeps first and last; otherwise uses '***'
 *
 * @param {string} email - The email address to mask.
 * @returns {string|null} The masked email, or null if invalid.
 */
function maskEmail(email) {

  if (typeof email !== "string" || !email.includes("@")) return null;

  let [username, domain] = email.split("@");
  if (username.length === 0 || domain.length === 0) return null;

  const masked =
    username.length > 3
      ? username[0] +
        "*".repeat(username.length - 2) +
        username[username.length - 1]
      : "***";

  return `${masked}@${domain}`;
}

let email = "abcXYZ.A@test3.3.com";
console.log(maskEmail(email));
