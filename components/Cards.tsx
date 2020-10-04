import React from 'react'

import styles from '../styles/Cards.module.scss'

interface CardType {
    imagePath: string
}

const Card: React.FC<CardType> = ({ imagePath }) => {
    return (
        <div className={styles.card_choice}>
            <img src={imagePath} />
        </div>
    )
}

export default Card;
