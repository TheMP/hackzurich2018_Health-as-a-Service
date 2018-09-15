export class Prescription {

  name: String;
  drugs: Array<object>;
  grams: Array<number> = [];
  numTablets: Array<number> = [];

  constructor(name: String, drugs: Array<object>) {
    this.name = name;
    this.drugs = drugs;
    this.drugs.forEach(() => {
      this.grams.push(this.randomInt(1, 10) * 10);
      this.numTablets.push(this.randomInt(1, 3));
    });
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getTotalNumTablets() {
    return this.numTablets.reduce((a, b) => a + b, 0);
  }
}
