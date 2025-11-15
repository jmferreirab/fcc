/* 
Build a Lunch Picker Program

In this lab, you'll build a program that helps in managing lunch options. You'll work with an array of lunches, add and remove items from the array, and randomly select a lunch option.

User stories: https://www.freecodecamp.org/learn/javascript-v9/lab-lunch-picker-program/build-a-lunch-picker-program

*/

let lunches = [];

function addLunchToEnd(arr, lunch) {
  arr.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, lunch) {
  arr.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return arr;
}

function removeFirstLunch(arr) {
  if (arr && arr.length > 0) {
    let item = arr.shift();
    console.log(`${item} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeLastLunch(arr) {
  if (arr && arr.length > 0) {
    let item = arr.pop();
    console.log(`${item} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr && arr.length > 0) {
    let randLunch = arr[Math.floor(Math.random() * arr.length)];
    console.log(`Randomly selected lunch: ${randLunch}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr && arr.length > 0) {
    console.log("Menu items: " + arr.join(", "));
  } else {
    console.log("The menu is empty.");
  }
}

// removeLastLunch([]);
// removeFirstLunch([]);
// removeLastLunch(["Stew", "Soup", "Toast"]);
// removeLastLunch(["Sushi", "Pizza", "Noodles"]);
// removeFirstLunch(["Salad", "Eggs", "Cheese"]);
// removeFirstLunch(["Sushi", "Pizza", "Burger"]);
// getRandomLunch([]);
// showLunchMenu([]);
// showLunchMenu(["Greens", "Corns", "Beans"]);
// showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);
