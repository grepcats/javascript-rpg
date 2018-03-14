import { Character, Monk } from '../src/character.js';
import { Battle } from '../src/battle.js';

let hero = new Monk("Sal");
let enemy = new Monk("Jack");

let currentBattle = new Battle(hero, enemy);

while (currentBattle.battleOn) {

  if (currentBattle.turn) {
    currentBattle.hero.attack(currentBattle.enemy);
    //console.log("enemy hp: " + currentBattle.enemy.hp);
    currentBattle.turn = false;
    if (currentBattle.enemy.hp <= 0) {
      currentBattle.battleOn = false;
      //you win!
      currentBattle.hero.money += Math.random() * 10;
      currentBattle.hero.xp += Math.random() * 10;
    }
  } else {

    currentBattle.enemy.attack(currentBattle.hero)
    //console.log("hero hp: " + currentBattle.hero.hp);
    currentBattle.turn = true;
    if (currentBattle.hero.hp <= 0) {
      currentBattle.battleOn = false;
    }
  }
}
