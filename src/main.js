import { Character, Monk, Sorcerer, Rogue, Fighter } from './character.js';
import { Battle } from './battle.js';


let hero = new Monk("Sal");
let enemy = new Monk("Jack");

let battle = new Battle(hero, enemy);

while (battle.battleOn) {

  if (battle.turn) {
    battle.hero.attack(battle.enemy);
    //console.log("enemy hp: " + battle.enemy.hp);
    battle.turn = false;
    if (battle.enemy.hp <= 0) {
      battle.battleOn = false;
      //you win!
      battle.hero.money += Math.random() * 10;
      battle.hero.xp += Math.random() * 10 * battle.enemy.level;
      battle.hero.updateLevel();
      //updatestats
    }
  } else {

    battle.enemy.attack(battle.hero)
    //console.log("hero hp: " + battle.hero.hp);
    battle.turn = true;
    if (battle.hero.hp <= 0) {
      battle.battleOn = false;
    }
  }
}
