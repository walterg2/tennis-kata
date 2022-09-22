export default class Game {
  constructor() {
    this.players = ['Player1', 'Player2']
    this.points = [0,0]
  }

  scorePoint(player) {
    this.points[player - 1]++
  }

  getScore() {
    return "love-all"
  }
}
