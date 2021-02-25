import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, seIstActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    /**
     * padStart(2, '0')
     * Avalia se a string possui 2 digitos, caso negativo preenche com a string 0 a esquerda
     * 
     * 25 ['2' '5']
     * (5).padstart = '05' ['0' '5']
     * 
     * split('') split sem caracter (''), fará a string ser dividida caracter por caracter
     */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    
    function startCountdown() {
        seIstActive(true);

    }
    function resetCountdown() {
        clearTimeout(countdownTimeout)
        seIstActive(false)
        setTime(0.05 * 60)
        
    }

    useEffect(() => {
        if (isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            },1000)
        } else if (isActive && time === 0) {
           setHasFinished(true)
           seIstActive(false)
           startNewChallenge()
        }
    },[isActive, time])


    return (
    <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        { hasFinished ? (
            <button 
                disabled
                className={styles.countdownButton }>
                    Ciclo Encerrado
            </button>
        ) : (
            <>
              { isActive ? (

                <button 
                onClick={resetCountdown}
                type='button' 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                    Abandonar ciclo
                </button>
                ) : (

                <button 
                onClick={startCountdown}
                type='button' 
                className={styles.countdownButton}>
                    Iniciar um Ciclo
                </button>
                )}
            </>
        )}
        
      


    </div>    
    )

}