const possibleResults = [
    [0, 1, 2, 1, 2],
    [2, 0, 1, 2, 1],
    [1, 2, 0, 1, 2],
    [2, 1, 2, 0, 1],
    [1, 2, 1, 2, 0],
];

const mapPlayerToNum = {
    'scissors': 0,
    'paper': 1,
    'rock': 2,
    'lizard': 3,
    'spock': 4
}

export const mapNumToPlayer = {
    0: 'scissors',
    1: 'paper',
    2: 'rock',
    3: 'lizard',
    4: 'spock'
}

export const mapResult = {
    0: 'Empate',
    1: 'Você ganhou a rodada!',
    2: 'Você perdeu a rodada :('
}

type computerPick = () => number;

export const computerPick: computerPick = () => {
    const min = 0;
    const max = 4;

    return Math.floor(Math.random() * (max - min + 1) + min);
}

type GetRoundResult = (human: string, computerChoice: number) => number;

export const getRoundResult: GetRoundResult = (human: string, computerChoice: number) => {
    const humanChoice = mapPlayerToNum[human];
    const roundWiner = possibleResults[humanChoice][computerChoice];

    return roundWiner;
}

export default getRoundResult;
