export class Character {
  constructor(name, hp, mp, xp, level) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.xp = xp;
    this.level = level;
  }
}

export class Monk extends Character {
  constructor(name) {
    let hp = 20;
    let mp = 20;
    let xp = 0;
    let level = 1;
    super(name, hp, mp, xp, level);
  };
}

let player = new Monk("jack");
console.log(player.name + ", " + player.level + ", " + player.hp);
