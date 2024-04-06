const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};

const char_2 = {
  name: 'Маг',
  type: 'Mage',
  health: 40,
  level: 1,
  attack: 55,
  defence: 5,
};

class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  [Symbol.iterator]() {
    let index = 0;
    const characters = this.characters;

    return {
      next() {
        if (index < characters.length) {
          return { value: characters[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

const team = new Team();
team.addCharacter(char);
team.addCharacter(char_2);

for (const character of team) {
  console.log(character);
}
