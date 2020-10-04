import { GetStaticPaths } from 'next'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Styles
import styles from '../../styles/PlayPage.module.scss'

// Components
import Card from '../../components/Cards'

// Utils
import getRoundResult, { computerPick, mapResult, mapNumToPlayer } from '../../utils/gameUtils'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

interface GameOptionType {
    rounds: number
}

const GameOption: React.FC<GameOptionType> = ({ rounds }) => {
    // currentScore[0] is the human score and currentScore[1] the compter score.
    const [currentScore, setScore] = useState<Array<number>>([0, 0]);
    const [roundWinner, setRoundWinner] = useState<string>('');
    const [humanPlay, setHumanPlay] = useState<string>('');
    const [computerPlay, setComputerPlay] = useState<string>('');
    const router = useRouter();
    let winner = 0;

    const makePlay = (human: string) => {
        const computer = computerPick();
        setHumanPlay('/' + human + '.svg');
        setComputerPlay('/' + mapNumToPlayer[computer] + '.svg');
        const result = getRoundResult(human, computer);

        if (result == 1) {
            setScore([currentScore[0] + 1, currentScore[1]]);
        } else if (result == 2) {
            setScore([currentScore[0], currentScore[1] + 1]);
        }

        setRoundWinner(mapResult[result]);
    }

    useEffect(() => {
        if (rounds === 3) {
            if (currentScore[0] == 2 || currentScore[1] == 2) {
                winner = currentScore[0] == 2 ? 1 : 2;
            }
        } else if (rounds === 5) {
            if (currentScore[0] == 3 || currentScore[1] == 3) {
                winner = currentScore[0] == 3 ? 1 : 2;
            }
        }

        if (winner > 0) {
            router.push('/endGame/' + winner);
        }
    });

    return (
        <React.Fragment>
            <div className={styles.score}>
                <a
                    className={styles.info_button}
                    target='_blank'
                    href='https://www.youtube.com/watch?v=abQj0pQkSOY'>
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size='sm'
                        className={styles.info_icon}
                    />
                </a>
                <p className={styles.score_font}>
                    <strong>{currentScore[0]} - {currentScore[1]}</strong>
                </p>
                <p className={styles.round_result_font}>{roundWinner}</p>
            </div>
            <div className={styles.card_container}>
                <div className={styles.human_options}>
                    <Card imagePath={humanPlay} />
                    <div className={styles.plays}>
                        <div className={styles.rock} onClick={() => makePlay('rock')}></div>
                        <div className={styles.paper} onClick={() => makePlay('paper')}></div>
                        <div className={styles.scissors} onClick={() => makePlay('scissors')}></div>
                        <div className={styles.lizard} onClick={() => makePlay('lizard')}></div>
                        <div className={styles.spock} onClick={() => makePlay('spock')}></div>
                    </div>
                </div>
                <Card imagePath={computerPlay} />
            </div>
        </React.Fragment>
    )
}

interface Params {
    params: {
        mdx: string
    }
}

export const getStaticProps = async (params: Params) => {
    const rounds: number = +((params.params.mdx).split('md')[1]);

    return {
        props: {
            rounds: rounds
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { mdx: 'md3' } },
            { params: { mdx: 'md5' } }
        ],
        fallback: false
    }
}

export default GameOption;
