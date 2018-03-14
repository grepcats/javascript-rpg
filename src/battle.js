export class Battle {
  constructor(hero, enemy) {
    this.hero = hero;
    this.enemy = enemy;
    this.turn = (this.hero.dex >= this.enemy.dex);
  }
}
