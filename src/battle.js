import { Character, Monk, Sorcerer, Rogue, Fighter } from '../src/character.js';

export class Battle {
  makeEnemy() {
    let names = ["Russell", "Cameron", "Stef", "Other Kaila", "Chase", "David", "Mike", "John", "AnnaMarie", "Ron"];
    let name = names[Math.floor(Math.random() * names.length)];

    let rand = Math.random() * 4;
    if (rand < 1) {
      this.enemy = new Fighter(name);
    } else if (rand < 2) {
      this.enemy = new Monk(name);
    } else if (rand < 3) {
      this.enemy = new Sorcerer(name);
    } else {
      this.enemy = new Rogue(name);
    }

    this.enemy.setLevel(Math.floor(Math.random() * 2 + this.hero.level));
  }

  constructor(hero) {
    this.hero = hero;
    this.makeEnemy();
    this.turn = (this.hero.dex >= this.enemy.dex);
    this.battleOn = true;
  }
}
