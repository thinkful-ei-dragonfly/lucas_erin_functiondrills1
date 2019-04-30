'use strict';

// Repeat Drill

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}
function hello() {
  console.log('Hello world');
}
function goodbye() {
  console.log('Goodbye world');
}
let hi = repeat(goodbye,1);

// Functions as Arguments

function filter(arr, fn) {
  // TASK: Define your function here
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


// Function as return value

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return (function(location){
    warningCounter++;
    if (warningCounter === 1) {
      console.log(`DANGER! There is ${typeOfWarning} hazard at ${location}`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    }
    else {
      console.log(`DANGER! There is ${typeOfWarning} hazard at ${location}`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }

  });
}
const rocksWarning = hazardWarningCreator('Rocks on the road');
const rainWarning = hazardWarningCreator('Road is slippery');
const fogWarning = hazardWarningCreator('Low visibility');

fogWarning('2nd Avenue');
fogWarning('34th street');
fogWarning('everywhere');
fogWarning();
// ^^^ This somehow passed in the second 'location' argument, but not sure how it works exactly


// forEach, filter, and Map

function turtleSteps(arr){
  let steps = arr.filter(move => ((move[0] >= 0) && (move[1] >= 0))).map(move => move[0] + move[1]);
  steps.forEach(function(key, i){
    console.log(`Movement #${i+1}: ${key} Steps`);
  });
}
turtleSteps([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);


// Reduce

function decodeSentence(string){
  let wordArray = string.split(' ');
  function constructWords(sentence, word){
    if (word.length === 3) {

      console.log(`sentence is ${sentence}\n word is ${word}`);
      return sentence += ' ';

    } else {
      word[word.length - 1].toUpperCase();
      console.log(`sentence is ${sentence}\n word is ${word}`);
      return sentence += word;
    }
  }
  wordArray.reduce(constructWords, '');
}
let decodedResult = decodeSentence('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest');
