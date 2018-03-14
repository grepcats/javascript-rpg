import { Character, Monk, Sorcerer, Rogue, Fighter } from '../src/character.js';
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
  let hero;
  let enemy;

  beforeEach(function() {
    hero = new Monk("Sal");
    enemy = new Monk("Jack");
  });

  it('creates a Monk character with name etc', function() {
    let monkName = "Sal";

    expect(hero.name).toEqual(monkName);
    expect(hero.hp).toEqual(30);
    expect(hero.level).toEqual(1);
  });

  it('uses attack, drains enemy hp based on strength of character', function() {
    let initialHP = enemy.hp;
    hero.attack(enemy);
    expect(enemy.hp).toEqual(initialHP - hero.str);
  });
});

describe('Battle', function() {
  let monkChar;
  let sorcererChar;
  let rogueChar;
  let fighterChar;

  beforeEach(function() {
    monkChar = new Monk("Sal");
    sorcererChar = new Sorcerer("Jack");
    rogueChar = new Rogue("Frank");
    fighterChar = new Fighter("Puget");
  });

  it('creates a Battle object given combatants', function() {
    let battle = new Battle(monkChar, sorcererChar);
    expect(battle.hero).toEqual(monkChar);
    expect(battle.enemy).toEqual(sorcererChar);
    expect(battle.turn).toEqual(true);
  });

  it('attacks affect battle player objects', function() {
    let battle = new Battle(monkChar, sorcererChar);
    let initialHP = battle.enemy.hp;
    battle.hero.attack(battle.enemy);
    expect(battle.hero.hp).toEqual(30);
    expect(battle.enemy.hp).toEqual(initialHP - battle.hero.str);
  });




});
