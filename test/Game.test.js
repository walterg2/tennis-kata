import Game from "../src/Game";

describe("Tennis Game", () => {
  let game = null;

  beforeEach(() => {
    game = new Game();
  });

  it("can start a new game with two players", () => {
    expect(game).not.toBeNull();
    expect(game.players.length).toEqual(2);
  });

  describe("scoring", () => {
    it("starts with a score of love-all", () => {
      expect(game.getScore()).toEqual("love-all");
    });

    it('updates the score to "15, love" when player 1 scores', () => {
      game.scorePoint("Player1");

      expect(game.getScore()).toEqual("15, love");
    });

    it('updates the score to "30, love" when player 1 scores twice', () => {
      game.scorePoint("Player1");
      game.scorePoint("Player1");

      expect(game.getScore()).toEqual("30, love");
    });

    it('updates the score to "40, love" when player 1 scores three times', () => {
      game.scorePoint("Player1");
      game.scorePoint("Player1");
      game.scorePoint("Player1");

      expect(game.getScore()).toEqual("40, love");
    });
  });
});
