import { times } from "lodash";
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
      times(2, () => game.scorePoint("Player1"));

      expect(game.getScore()).toEqual("30, love");
    });

    it('updates the score to "40, love" when player 1 scores three times', () => {
      times(3, () => game.scorePoint("Player1"));

      expect(game.getScore()).toEqual("40, love");
    });

    it('updates the score for both players to "15, 15" when both score once', () => {
      game.scorePoint("Player1");
      game.scorePoint("Player2");

      expect(game.getScore()).toEqual("15, 15");
    });
  });

  describe("winning", () => {
    it("shows no winner when no one has 4 points", () => {
      expect(game.winner).toBeNull();
    });

    it("sets Player1 as the winner when they score 4 points", () => {
      times(4, () => game.scorePoint("Player1"));

      expect(game.winner).toEqual("Player1");
    });

    it("sets Player2 as the winner when they score 4 points", () => {
      times(4, () => game.scorePoint("Player2"));

      expect(game.winner).toEqual("Player2");
    });

    it.each([
      ["Player1", "Player2"],
      ["Player2", "Player1"]
    ])("does not set the winner if neither player has at least two points more than the other", (winner, loser) => {
      times(3, () => {
        game.scorePoint(winner);
        game.scorePoint(loser);
      });

      game.scorePoint(winner);

      expect(game.winner).toBeNull();
    });
  });
});
