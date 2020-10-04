import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={styles.game_options}>
            <div className={styles.md3_container}>
                <Link href='/gameOption/md3'>
                    <button className={styles.game_option_button}>
                        Melhor de 3
                    </button>
                </Link>
            </div>
            <div className={styles.md5_container}>
                <Link href='/gameOption/md5'>
                    <button className={styles.game_option_button}>
                        Melhor de 5
                    </button>
                </Link>
            </div>
        </div>
    )
}
