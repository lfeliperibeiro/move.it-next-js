import styles from '../styles/components/Countdown.module.css';
import Close from "../../public/icons/Close";
import {useContext, useEffect, useState} from "react";
import {ChallengeContext} from "../contexts/ChallengesContext";


let countdownTimeout: NodeJS.Timeout;

export function Countdown () {
    const { startNewChallenge } = useContext(ChallengeContext)
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown () {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

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