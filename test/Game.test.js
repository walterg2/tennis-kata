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

  it('advances the score when a player wins a set', () => {
    const game = new Game()

    game.scorePoint(1)

    expect(game.points).toEqual([1,0])
  })
})
