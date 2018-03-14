import { Character, Monk, Sorcerer, Rogue, Fighter } from '../src/character.js';
import { Battle } from '../src/battle.js';

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
    let battle = new Battle(monkChar);
    battle.enemy = sorcererChar;

    expect(battle.hero).toEqual(monkChar);
    expect(battle.enemy).toEqual(sorcererChar);
    expect(battle.turn).toEqual(true);
  });

  it('attacks affect battle player objects', function() {
    let battle = new Battle(monkChar);
    battle.enemy = sorcererChar;

    let initialHP = battle.enemy.hp;
    battle.hero.attack(battle.enemy);
    expect(battle.hero.hp).toEqual(30);
    expect(battle.enemy.hp).toEqual(initialHP - battle.hero.str);
  });

  it('magic attacks affect battle player objects', function() {
    let battle = new Battle(sorcererChar);
    battle.enemy = fighterChar;

    let initialHP = battle.enemy.hp;
    let initialMP = battle.hero.mp;
    battle.hero.magic(battle.enemy);
    expect(battle.hero.hp).toEqual(20);
    expect(battle.enemy.hp).toEqual(initialHP - battle.hero.int);
    expect(battle.hero.mp).toEqual(initialMP - 5);
  });

  it('makes a random enemy', function() {
    let battle = new Battle(sorcererChar);
    battle.makeEnemy();
    let names = ["Russell", "Cameron", "Stef", "Other Kaila", "Chase", "David", "Mike", "John", "AnnaMarie", "Ron"];
    expect(names.includes(battle.enemy.name)).toEqual(true);
  });

  // it('makes a random enemy', function() {
  //   let battle = new Battle(sorcererChar);
  //   let initialHeroStr = battle.hero.str;
  //   battle.hero.setLevel(6);
  //   expect(battle.hero.str).toEqual(initialHeroStr + 5);
  //   battle.makeEnemy();
  //   expect(names.includes(battle.enemy.name)).toEqual(true);
  // });
  //special
  // it('special attacks affect battle player objects')

});
