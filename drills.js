'use strict';

function yearOfBirth(age) {
  if (age < 0) {
    throw new Error('age cannot be negative.');
  }
  else {
    return 2019 - age;
  }
}

function createGreeting(name, age) {
  const birthYear = yearOfBirth(age);
  return `Hi my name is ${name} and I'm ${age} years old.  I was born in ${birthYear}.`;
}

try {
  const greeting = createGreeting();
  console.log(greeting);
} catch(e){
  console.error(e.message);
}