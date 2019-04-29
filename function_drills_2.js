'use strict';

function jediName(firstName, lastName) {
  // let jediFirst =[];
  // let jediLast = [];
  // for (let i = 0; i < 4; i++) {
  //   jediFirst.push(firstName[i]);
  // }
  // for (let i = 0; i < 3; i++) {
  //   jediLast.push(lastName[i]);
  // }
  // Originally we thought we'd use a for loop on the strings
  let jediFirst = firstName.slice(0, 3);
  let jediLast = lastName.slice(0, 2);
  let finalJediName = `${jediLast}${jediFirst}`;
  return finalJediName;
}
let myName = jediName('Lucas', 'Vocos');
// console.log(myName);


// Beyond function

function beyond(num) {
  if (num === Infinity) {
    console.log('and beyond!');
  } else if ((num !== Infinity)&&(num > 0)) {
    console.log('To infinity');
  } else if ((num !== Infinity) && (num < 0)) {
    console.log('To negative infinity');
  } else {
    console.log('Staying home.');
  }
}
// beyond(Infinity);

// Cracking the code

function decode(codedWord) {
  // let firstLetter = codedWord.slice(0,1);
  let firstLetter = codedWord[0];

  if (firstLetter === 'a') {
    return codedWord[1];
  } else if (firstLetter === 'b') {
    return codedWord[2];
  } else if (firstLetter === 'c') {
    return codedWord[3];
  } else if (firstLetter === 'd') {
    return codedWord[4];
  } else {
    return '';
  }

}
function decodeString(string) {
  let words = string.split(' ');
  let newstring = words.forEach(function(codedWord){
    decode(codedWord);
  });
  console.log(newstring);
}
let decodedWord1 = decode('craft');
let decodedWord2 = decode('block');
let decodedWord3 = decode('argon');
let decodedWord4 = decode('meter');
let decodedWord5 = decode('bells');
let decodedWord6 = decode('brown');
let decodedWord7 = decode('croon');
let decodedWord8 = decode('droop');

console.log(`${decodedWord1}${decodedWord2}${decodedWord3}${decodedWord4}${decodedWord5}${decodedWord6}${decodedWord7}${decodedWord8}`);
decodeString('craft block argon meter bells brown croon droop');
