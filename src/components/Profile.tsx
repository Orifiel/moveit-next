import { useContext } from 'react'
import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'


export function Profile() {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FLinus-Torvalds&psig=AOvVaw3uP5HQ-WAG3yC0fgMHvA5P&ust=1702158396558000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCMz77ogIMDFQAAAAAdAAAAABAD" alt="Linus Torvalds"/>
            <div>
                <strong>Linus Torvalds</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}