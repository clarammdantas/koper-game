import { GetStaticPaths } from 'next'
import React, { useState } from 'react'

// Styles
import styles from '../../styles/PlayPage.module.scss'

interface GameOptionType {
    rounds: number
}

const GameOption: React.FC<GameOptionType> = ({ rounds }) => {
    // currentScore[0] is the human score and currentScore[1] the compter score.
    const [currentScore, setScore] = useState<Array<number>>([0, 0]);

    return (
        <React.Fragment>
            <div className={styles.score}>
                <p className={styles.score_font}>
                    <strong>{currentScore[0]} - {currentScore[1]}</strong>
                </p>
            </div>
            <div className={styles.card_container}>
                <div className={styles.human_options}>
                    <div className={styles.card_choice}></div>
                    <div className={styles.plays}>
                        <div className={styles.rock}></div>
                        <div className={styles.paper}></div>
                        <div className={styles.scissors}></div>
                        <div className={styles.lizard}></div>
                        <div className={styles.spock}></div>
                    </div>
                </div>
                <div className={styles.card_choice}></div>
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
