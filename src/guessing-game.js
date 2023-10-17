class GuessingGame {
  constructor() {
    this.minRange = 0;
    this.maxRange = 0;
    this.guessValue = 0;
  }

  setRange(min, max) {
    this.minRange = min;
    this.maxRange = max;
  }

  guess() {
    this.guessValue = Math.round((this.minRange + this.maxRange) / 2);
    return this.guessValue;
  }

  lower() {
    this.maxRange = this.guessValue;
  }

  greater() {
    this.minRange = this.guessValue;
  }
}

module.exports = GuessingGame;
