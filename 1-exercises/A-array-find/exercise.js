/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];
function isLongName(name) {
  return name[0] === "A";
}
//var longNameThatStartsWithA = findLongNameThatStartsWithA(names);
//var longNameThatStartsWithA = names.find((name) => name[0] === "A");
var longNameThatStartsWithA = names.find(isLongName);
console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
