import styles from '../styles/components/Countdown.module.css';
import Close from "../../public/icons/Close";
import {useContext} from "react";
import {CountdownContext} from "../contexts/CountdownContext";

export function Countdown () {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);

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

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                    >
                    Ciclo encerrado <img src="icons/check.svg" alt="close" />
                </button>
            ): (
                <>
                    {isActive ?(
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo <Close color={ '#666666'}/>
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo <img src="icons/play_arrow.svg" alt="play" />
                        </button>
                    )}
                </>
            )}




        </div>
    )
}