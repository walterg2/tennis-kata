const AVAILABLE_POINTS = ["love", "15", "30", "40"];

export default class Game {
  _points = [0, 0];

  constructor() {
    this.players = ["Player1", "Player2"];
    this.winner = null;
  }

  scorePoint(playerName) {
    const player = this.players.findIndex((p) => p === playerName);
    this._points[player]++;
  }

  getScore() {
    if (this._points[0] === 0 && this._points[1] === 0) return "love-all";

    return `${AVAILABLE_POINTS[this._points[0]]}, ${
      AVAILABLE_POINTS[this._points[1]]
    }`;
  }
}
