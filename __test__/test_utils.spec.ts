import getRoundResult, { mapNumToPlayer, mapPlayerToNum } from '../utils/gameUtils'

test('testGetRoundResult', () => {
    // In this test, we'll test all the possible results of a game, which are
    // 25 in total.

    const wins = [
        ['scissors', 'paper'],
        ['scissors', 'lizard'],
        ['paper', 'spock'],
        ['paper', 'rock'],
        ['rock', 'lizard'],
        ['rock', 'scissors'],
        ['lizard', 'paper'],
        ['lizard', 'spock'],
        ['spock', 'scissors'],
        ['spock', 'rock']];

    for (let i = 0; i < 10; i++) {
        const player2 = mapPlayerToNum[wins[i][1]];
        expect(getRoundResult(wins[i][0], player2)).toBe(1);

        // If the above is a win, then the inverse is a lost.
        const player1 = mapPlayerToNum[wins[i][0]];
        expect(getRoundResult(wins[i][1], player1)).toBe(2);
    }

    // Test ties.
    for (let i = 0; i < 5; i++) {
        const player1 = mapNumToPlayer[i];
        expect(getRoundResult(player1, i)).toBe(0);
    }
});
