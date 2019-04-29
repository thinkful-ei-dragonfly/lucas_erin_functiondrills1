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
  if (((age.length > 0) && (typeof age === 'number')) && ((name.length > 0) && (typeof name === 'string'))) {
    return `Hi my name is ${name} and I'm ${age} years old.  I was born in ${birthYear}.`;
}
  else {
    throw new Error('Arguments not valid');
  }


try {
  const greeting = createGreeting('Erin', 25);
  console.log(greeting);
} catch(e){
  console.error(e.message);
}