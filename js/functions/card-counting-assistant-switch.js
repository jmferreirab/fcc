/* Build a Card Counting Assistant

User Stories:

You should use let to declare a global variable named count and set it to 0.
You should have a function called cc.
The cc function should receive a card parameter which can either be a number or string.
For values between 2 to 10, the card parameter will be a number.
For all other values, the card parameter will be a string.
The cc function should modify the global count variable based on certain criteria.
The global count variable should be increased by 1 for the cards 2, 3,4, 5, or 6
The global count variable should remain unchanged for the cards 7, 8, 9.
The global count variable should be decreased by 1 for the cards 10, "J", "Q", "K", "A"
The cc function should return a string with current count and the string Bet if the count is positive.
The cc function should return a string with current count and the string Hold if the count is less than or equal to 0.
In the function output, the current count and the player's decision (Bet or Hold) should be separated by a space. For example, -3 Hold 

*/

let count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  return `${count} ${count > 0 ? "Bet" : "Hold"}`;
}
