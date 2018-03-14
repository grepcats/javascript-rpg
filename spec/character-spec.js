import { Character, Monk } from '../src/character.js';

describe('Character', function() {
  it('creates a character with name, hp, etc', function() {
    let charName = "jack";
    let charHp = 10;
    let newChar = new Character(charName, charHp, 20, 0, 1);
    expect(newChar.name).toEqual(charName);
    expect(newChar.hp).toEqual(charHp);
  });
});
