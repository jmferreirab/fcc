/* 
User Stories:

You should declare the following variables using let:

adjective, noun, verb, place, adjective2, noun2

You should assign the above variables some string values of your choice.
You should declare a firstStory variable.
You should use the following story template to create the first story and assign it to the firstStory variable: "Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.";
You should output your first story to the console using the message "First story: ${firstStory}".
You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.
You should declare a secondStory variable.
Create another story using the same template and assign it to the secondStory variable.
You should output your second story to the console using the message "Second story: ${secondStory}".
*/

let adjective = "wild",
  noun = "tomcat",
  verb = "growling",
  place = "castle",
  adjective2 = "hazy",
  noun2 = "fish";

// Note: A single FCC test breaks since the text regex does not use the dotAll flag.
// The fix is to leave everything as a long single line (no +).
// See https://github.com/freeCodeCamp/freeCodeCamp/blob/8d34ae8ab20e175801c4b52f8f163026feb97e7f/curriculum/challenges/english/blocks/lab-sentence-maker/66c057041df6394ca796bf33.md?plain=1#L207C3-L207C85

const firstStory =
  `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. ` +
  `The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

console.log(`First story: ${firstStory}`);

(adjective = "wild"),
  (noun = "hyena"),
  (verb = "walking"),
  (place = "dessert"),
  (adjective2 = "tender"),
  (noun2 = "meat");

const secondStory =
  `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. ` +
  `The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

console.log(`Second story: ${secondStory}`);
