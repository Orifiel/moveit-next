import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css'

import { CountdownContext } from '../contexts/CountdownContext'

export function Countdown() {
    const { 
        minutes,
        seconds, 
        hasFinished,
        isActive, 
        startCountdown, 
        resetCountdown,
    } = useContext(CountdownContext)

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