import { useContext } from 'react'
import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'


export function Profile() {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://media.newyorker.com/photos/5ba177da9eb2f7420aadeb98/4:3/w_1229,h_921,c_limit/Cohen-Linus-Torvalds.jpg" alt=""/>
            <div>
                <strong>Puinguim Linux</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}
