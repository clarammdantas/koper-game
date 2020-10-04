import React from 'react'
import { GetStaticPaths, NextPage } from 'next'

// Styles
import styles from '../../styles/FinalResult.module.scss'
import Link from 'next/link';

interface FinalResultType {
    humanWon: boolean
}

const FinalResult: NextPage<FinalResultType> = ({ humanWon }) => {
    const imagePath = humanWon ? '/won.png' : '/lost.png';
    const resultText = humanWon ? 'Você venceu!' : 'Você perdeu :(';

    return (
        <div className={styles.final_result_content}>
            <img className={styles.image_final_result} src={imagePath} />
            <p className={styles.text_style}>{resultText}</p>
            <Link href='/'>
                <button className={styles.play_again_button}>Jogar Novamente</button>
            </Link>
        </div>
    )
}

interface Params {
    params: {
        finalResult: string
    }
}

export const getStaticProps = (params: Params) => {
    const result = (params.params.finalResult as string).split('.')[0];
    const humanWon = result == '1' ? true : false;

    return {
        props: {
            humanWon: humanWon
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { finalResult: '1' } },
            { params: { finalResult: '2' } }
        ],
        fallback: false
    }
}

export default FinalResult;
