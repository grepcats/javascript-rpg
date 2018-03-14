export class Character {
  constructor({name, hp, mp, xp, level, str, dex, con, int}) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.xp = xp;
    this.level = level;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
  }
}

export class Monk extends Character {
  constructor(monkName) {
    super({name: monkName, hp: 30, mp: 10, xp: 0, level: 1, str: 3, dex: 5, con: 5, int: 5});
  };
}

export class Sorcerer extends Character {
  constructor(sorcererName) {
    super({name: sorcererName, hp: 20, mp: 30, xp: 0, level: 1, str: 1, dex: 4, con: 2, int: 7});
  };
}

export class Rogue extends Character {
  constructor(rogueName) {
    super({name: rogueName, hp: 20, mp: 20, xp: 0, level: 1, str: 5, dex: 5, con: 4, int: 3});
  };
}

export class Fighter extends Character {
  constructor(fighterName) {
    super({name: fighterName, hp: 20, mp: 10, xp: 0, level: 1, str: 6, dex: 4, con: 5, int: 2});
  };
}
