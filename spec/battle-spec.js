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

  it('magic attacks affect battle player objects', function() {
    let battle = new Battle(sorcererChar, fighterChar);
    let initialHP = battle.enemy.hp;
    let initialMP = battle.hero.mp;
    battle.hero.magic(battle.enemy);
    expect(battle.hero.hp).toEqual(20);
    expect(battle.enemy.hp).toEqual(initialHP - battle.hero.int);
    expect(battle.hero.mp).toEqual(initialMP - 5);
  });

  //special
  // it('special attacks affect battle player objects')

});
