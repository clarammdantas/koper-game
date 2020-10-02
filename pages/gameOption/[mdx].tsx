import { NextPageContext } from 'next';
import React, { useState } from 'react'

interface GameOptionType {
    rounds: number
}

const GameOption: React.FC<GameOptionType> = ({ rounds }) => {
    // The first value is the human score and the second the compter score.
    const [currentScore, setScore] = useState<Array<number>>([0, 0]);

    return ()
}

export const getStaticProps = async (context: NextPageContext) => {
    const rounds: number = +((context.query.mdx as string).split('.')[0]);

    return {
        props: {
            rounds: rounds
        }
    }
}

export default GameOption;
