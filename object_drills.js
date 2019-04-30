'use strict';

// 1. Object initializers and methods

let loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water/this.flour)*100;
  }
};
var result = loaf.hydration();
console.log(result);

// 2. Iterating over an object's properties

let object = {
  foo: 'foo',
  bar: 'bar',
  fum: 12,
  quux: 15,
  spam: 'spam'
};
for (var property in object) {
  if (object.hasOwnProperty(property)) {
    console.log(`Property: ${property}. Value is ${object[property]}`);
  }
}

// 3. Arrays in objects

let mealsObject = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'suppert']
};
console.log(mealsObject.meals[3]);

// 4. Arrays of objects

let maggie = {
    name: 'Maggie',
    jobTitle: 'Creative Director',
    boss: 'lucas'
  },
  andrea = {
    name: 'Andrea',
    jobTitle: 'Community Organizer',
    boss: 'lucas'
  },
  magdalena = {
    name: 'Magdalena',
    jobTitle: 'Domestict Worker',
    boss: 'lucas'
  },
  lucas = {
    name: 'Lucas',
    jobTitle: 'Designer/Developer'
  },
  winston = {
    name: 'Winston',
    jobTitle: 'School Director',
    boss: 'lucas'
  };

let family = [maggie, andrea, magdalena, lucas, winston];

family.forEach(function(person){

  if (person.boss === 'lucas') {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
  } else {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anyone`);
  }

});


// 5. Properties that aren't there

// 6. Cracking the code

// 7. Factory Functions with LOTR

function createCharacter(character){
  return {
    name: character.name,
    nickName: character.nickName,
    race: character.race,
    origin: character.origin,
    attack: character.attack,
    defense: character.defense,
    describe: function(){
      console.log(`${character.name} is a ${character.race} from ${character.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  };
}
let characters = [
  {
    name: 'Gandalf the White',
    nickName: 'gandalf',
    race: 'Wizard',
    origin: 'Middle Earth',
    attack: 10,
    defense: 6,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Bilbo Baggins',
    nickName: 'bilbo',
    race: 'hobbit',
    origin: 'The Shire',
    attack: 2,
    defense: 1,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Frodo Baggins',
    nickName: 'frodo',
    race: 'hobbit',
    origin: 'The Shire',
    attack: 3,
    defense: 2,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Aragorn son of Arathorn',
    nickName: 'aragorn',
    race: 'man',
    origin: 'Dunnedain',
    attack: 6,
    defense: 8,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Legolas',
    nickName: 'legolas',
    race: 'elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 5,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  },
  {
    name: 'Arwen Undomiel',
    nickName: 'arwen',
    race: 'Half-Self',
    origin: 'Rivendell',
    attack: 6,
    defense: 2,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let opponentDamage = this.attack - opponent.defense,
        myDamage = opponent.attack - this.defense;

      if (this.defense > opponent.attack) {
        myDamage = 0;
      } else if (opponent.defense > this.attack) {
        opponentDamage = 0;
      }
      console.log(`Your opponent takes ${opponentDamage} damage and you receive ${myDamage} damage`);
    }
  }
];
characters.forEach(function(character){
  createCharacter(character);
});

// Find aragorn
function findAragorn(character) {
  if (character.nickName === 'aragorn') {
    character.describe();
  }

}
characters.find(findAragorn);

// filter hobbits

function findHobbits(character) {
  return character.race === 'hobbit';
}
function strongGuys(character) {
  return character.attack > 5;
}
const hobbits = characters.filter(findHobbits);
const strongCharacters = characters.filter(strongGuys);
console.log(strongCharacters);
console.log(hobbits);
