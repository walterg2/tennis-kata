import Game from '../src/Game'

describe('Tennis Game', () => {
  let game = null;

  beforeEach(() => {
    game = new Game()
  })

  it('can start a new game with two players', () => {
    expect(game).not.toBeNull()
    expect(game.players.length).toEqual(2)
  })

  it('starts with a score of love-all', () => {
    expect(game.getScore()).toEqual("love-all")
  })

  it('allows the player to score a point', () => {
    game.scorePoint(1)

    expect(game.points).toEqual([1,0])
  })

  it('updates the score to "15, love" when player 1 scores', () => {
    game.scorePoint(1)

    expect(game.getScore()).toEqual("15, love")
  })
})
