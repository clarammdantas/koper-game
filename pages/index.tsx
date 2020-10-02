import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.game_options}>
        <div className={styles.md3_container}>
            <button className={styles.game_option_button}>
                Melhor de 3
            </button>
        </div>
        <div className={styles.md5_container}>
            <button className={styles.game_option_button}>
                Melhor de 5
            </button>
        </div>
    </div>
  )
}
