'use strict';

function yearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  const birthYear = yearOfBirth(age);
  return `Hi my name is ${name} and I'm ${age} years old.  I was born in ${birthYear}.`;
}

const greeting = createGreeting();
console.log(greeting);