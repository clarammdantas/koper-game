const possibleResults = [
    [0, 1, 2, 1, 2],
    [2, 0, 1, 2, 1],
    [1, 2, 0, 1, 2],
    [2, 1, 2, 0, 1],
    [1, 2, 1, 2, 0],
];

const mapPlayerToNum = {
    'tesoura': 0,
    'papel': 1,
    'pedra': 2,
    'lagarto': 3,
    'spock': 4
}

const mapResult = {
    0: 'Empate',
    1: 'Você ganhou a rodada!',
    2: 'Você perdeu a rodada :('
}

type computerPick = () => number;

const computerPick: computerPick = () => {
    const min = 0;
    const max = 4;

    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRoundResult = (human: string) => {
    const humanChoice = mapPlayerToNum[human];
    const computerChoice = mapPlayerToNum[computerPick()];

     const roundWiner = possibleResults[humanChoice][computerChoice];

     return mapResult[roundWiner];
}

export default gameUtils;
