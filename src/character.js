export class Character {
  constructor({name, hp, mp, xp, level, str, dex, con, int, money}) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.xp = xp;
    this.level = level;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.money = money;
  }
  // let desiredLevel = Math.floor(Math.random() * 2 + this.hero.level);
  // while (this.enemy.level < desiredLevel) {
  //   this.enemy.xp += this.enemy.level * 10;
  //   this.enemy.updateStats();
  // }
  updateLevel() {
    while (this.xp >= this.level * 10) {
      this.level += 1;
      this.str += 1;
      this.dex += 1;
      this.con += 1;
      this.int += 1;
      this.xp -= this.level * 10;
    }
  }
  setLevel(desiredLevel) {
    while (this.level < desiredLevel) {
      this.level += 1;
      this.str += 1;
      this.dex += 1;
      this.con += 1;
      this.int += 1;
    }
  }
}

export class Monk extends Character {
  constructor(monkName) {
    super({name: monkName, hp: 30, mp: 10, xp: 0, level: 1, str: 3, dex: 5, con: 5, int: 5, money: 10});
    this.attackName = "strike";
    this.magicName = "mystical strike";
    this.specialName = "restorative trance";
  };
  attack(enemy) {
    enemy.hp -= this.str;
  }
  magic(enemy) {
    enemy.hp -= this.int;
    this.mp -= 5;
  }
  special(enemy) {
    this.hp += this.con;
    this.mp -= 3;
  }
}

export class Sorcerer extends Character {
  constructor(sorcererName) {
    super({name: sorcererName, hp: 20, mp: 30, xp: 0, level: 1, str: 1, dex: 4, con: 2, int: 7, money: 10});
    this.attackName = "hit with staff";
    this.magicName = "fireball";
    this.specialName = "big fireball";
  };
  attack(enemy) {
    enemy.hp -= this.str;
  }
  magic(enemy) {
    enemy.hp -= this.int;
    this.mp -= 5;
  }
  special(enemy) {
    enemy.hp -= this.int * 1.5;
    this.mp -= 10;
  }
}

export class Rogue extends Character {
  constructor(rogueName) {
    super({name: rogueName, hp: 20, mp: 20, xp: 0, level: 1, str: 5, dex: 5, con: 4, int: 3, money: 10});
    this.attackName = "stab";
    this.magicName = "charm";
    this.specialName = "steal"
  };
  attack(enemy) {
    enemy.hp -= this.str;
  }
  magic(enemy) {
    enemy.hp -= this.int;
    this.mp -= 5;
  }
  special(enemy) {
    this.money += 3;
  }
}

export class Fighter extends Character {
  constructor(fighterName) {
    super({name: fighterName, hp: 20, mp: 10, xp: 0, level: 1, str: 6, dex: 4, con: 5, int: 2, money: 10});
    this.attackName = "punch";
    this.magicName = "incredible leap";
    this.specialName = "WALLOP.";
  };
  attack(enemy) {
    enemy.hp -= this.str;
  }
  magic(enemy) {
    enemy.hp -= this.int;
    this.mp -= 5;
  }
  special(enemy) {
    enemy.hp -= this.str * 1.5;
    this.hp -= this.str * .5;
  }
}
