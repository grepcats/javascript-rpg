import { Character, Monk, Sorcerer, Rogue, Fighter } from '../src/character.js';

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

  it('sets character level and stats', function() {
    //check initial stregth for enemy
    //do set level which updates stats
    //strength should now equal inital strength + difference betweeen oroginal level & set level. 5.
    let initialHeroStr = enemy.str;
    enemy.setLevel(6);
    expect(enemy.str).toEqual(initialHeroStr + 5);
    expect(enemy.level).toEqual(6);
  });
});
