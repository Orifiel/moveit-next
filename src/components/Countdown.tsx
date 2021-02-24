import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false)
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
        setActive(true);

    }
        useEffect(() => {
            if (active && time > 0){
                setTimeout(() => {
                    setTime(time - 1)
                },1000)
            }
        },[active, time])
    
    

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
        
        <button 
        onClick={startCountdown}
        type='button' 
        className={styles.countdownButton}>
            Iniciar um Ciclo
        </button>
    </div>    
    )

}