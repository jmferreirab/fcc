/* User Stories:

You should initialize the five variables fortune1, fortune2, fortune3, fortune4, and fortune5 with a string value of your choice. You can use the below options if you like:

"Your cat will look very cuddly today."
"The weather will be nice tomorrow."
"Be cautious of your new neighbors."
"You will find a new hobby soon."
"It would be wise to avoid the color red today."

You should select a random number between 1 and 5, inclusive, and assign it to the variable randomNumber.

You should create a selectedFortune variable and assign the appropriate fortune based on these rules:

If randomNumber is 1, assign the value of fortune1 to selectedFortune.
If randomNumber is 2, assign the value of fortune2 to selectedFortune.
If randomNumber is 3, assign the value of fortune3 to selectedFortune.
If randomNumber is 4, assign the value of fortune4 to selectedFortune.
If randomNumber is 5, assign the value of fortune5 to selectedFortune.

You should log the selectedFortune to the console. 
*/

let randomNumber = Math.ceil(Math.random() * 5);
let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

let fortunes = [fortune1, fortune2, fortune3, fortune4, fortune5];
let selectedFortune = fortunes.at(randomNumber - 1);
console.log(selectedFortune);
