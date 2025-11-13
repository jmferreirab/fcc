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
let high_cards = [10, "J", "Q", "K", "A"];
let low_cards = [2, 3, 4, 5, 6];
let cards_map = new Map();

for (const i of high_cards) {
  cards_map.set(i, -1);
}

for (const i of low_cards) {
  cards_map.set(i, 1);
}

function cc(card) {
  count += cards_map.get(card) || 0;
  return `${count} ${count > 0 ? "Bet" : "Hold"}`;
}
