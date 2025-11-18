/* 

Build a Quiz Game

User stories: https://www.freecodecamp.org/learn/javascript-v9/lab-quiz-game/lab-quiz-game

*/

let questions = [
  {
    category: "A",
    question: "Lorem ipsum? 1",
    choices: ["A", "B", "C"],
    answer: "A",
  },
  {
    category: "B",
    question: "Lorem ipsum? 2",
    choices: ["A", "B", "C"],
    answer: "B",
  },
  {
    category: "C",
    question: "Lorem ipsum? 3",
    choices: ["A", "B", "C"],
    answer: "C",
  },
  {
    category: "D",
    question: "Lorem ipsum? 4 ",
    choices: ["A", "B", "C"],
    answer: "A",
  },
  {
    category: "E",
    question: "Lorem ipsum? 5",
    choices: ["A", "B", "C"],
    answer: "B",
  },
];
function getRandomComputerChoice(questionsArr) {
  return questionsArr[Math.floor(Math.random() * questionsArr.length)];
}
function getRandomQuestion(optionsArr) {
  return optionsArr[Math.floor(Math.random() * optionsArr.length)];
}
function getResults(question, computerChoice) {
  if (question.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
