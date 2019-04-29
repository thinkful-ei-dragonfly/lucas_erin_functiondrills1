'use strict';

function createGreeting(name, age) {
  let yearOfBirth = 2019 - age;
    return `Hi my name is ${name} and I'm ${age} years old.  I was born in ${yearOfBirth}.`;
}

const greeting = createGreeting();
console.log(greeting);