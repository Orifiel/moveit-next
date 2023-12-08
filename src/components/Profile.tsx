import { useContext } from 'react'
import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'


export function Profile() {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="Orifiel/moveit-next/public/readme_images/Linus Torvalds.png" alt="Linus Torvalds"/>
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
