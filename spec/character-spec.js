import { Character, Monk } from '../src/character.js';
import { Battle } from '../src/battle.js';

describe('Character', function() {
  it('creates a character with name, hp, etc', function() {
    let charName = "jack";
    let charHp = 10;
    let newChar = new Character({name: charName, hp: charHp});
    expect(newChar.name).toEqual(charName);
    expect(newChar.hp).toEqual(charHp);
  });
});

describe('Monk', function() {
  it('creates a Monk character with name etc', function() {
    let monkName = "jack";
    let newMonk = new Monk(monkName);
    expect(newMonk.name).toEqual(monkName);
    expect(newMonk.hp).toEqual(30);
    expect(newMonk.level).toEqual(1);
  });
});

describe('Battle', function() {
  it('creates a Battle object given combatants', function() {
    let hero = new Monk("Sal");
    let enemy = new Monk("Jack");
    let battle = new Battle(hero, enemy);
    expect(battle.hero).toEqual(hero);
    expect(battle.enemy).toEqual(enemy);
    expect(battle.turn).toEqual(true);
  });
});
