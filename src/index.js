class Tennis {
  constructor() {
    this.firstPlayerScoreTimes = 0;
    this.totalScore = "";
  }
  getScore() {
    if (this.firstPlayerScoreTimes === 1) {
      this.totalScore += "Fifteen love";
    }
    this.totalScore += "Love all";
  }

  firstPlayerScore() {
    this.firstPlayerScoreTimes++;
  }

  resetGame() {
    this.totalScore = "";
  }
}

module.exports = Tennis;
