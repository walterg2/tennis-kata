const AVAILABLE_POINTS = [
  "love", "15", "30", "40"
]

export default class Game {
  constructor() {
    this.players = ['Player1', 'Player2']
    this.points = [0,0]
  }

  scorePoint(playerName) {
    const player = this.players.findIndex(p => p === playerName)
    this.points[player]++
  }

  getScore() {
    if (this.points[0] === 0 && this.points[1] === 0) return "love-all"

    return `${AVAILABLE_POINTS[this.points[0]]}, love`
  }
}
