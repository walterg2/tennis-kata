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

    if (this._points[player] === 4 && this._calculatePointSpread() >= 2)
      this.winner = playerName;
  }

  getScore() {
    if (this._points[0] === this._points[1])
      return `${AVAILABLE_POINTS[this._points[0]]}-all`;

    return `${AVAILABLE_POINTS[this._points[0]]}, ${
      AVAILABLE_POINTS[this._points[1]]
    }`;
  }

  _calculatePointSpread() {
    return Math.abs(this._points[0] - this._points[1]);
  }
}
