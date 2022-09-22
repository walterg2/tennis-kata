import Game from '../src/Game'

describe('Tennis Game', () => {
  it('can start a new game with two players', () => {
    const game = new Game()

    expect(game).not.toBeNull()
    expect(game.players.length).toEqual(2)
  })

  it('starts with a score of love-all', () => {
    const game = new Game()

    expect(game.getScore()).toEqual("love-all")
  })

  it('allows the player to score a point', () => {
    const game = new Game()

    game.scorePoint(1)

    expect(game.points).toEqual([1,0])
  })

  it('updates the score to "15, love" when player 1 scores', () => {
    const game = new Game()

    game.scorePoint(1)

    expect(game.getScore()).toEqual("15, love")
  })
})
