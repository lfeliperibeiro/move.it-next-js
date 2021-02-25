import styles from '../styles/components/Profile.module.css';
import {ChallengeContext} from "../contexts/ChallengesContext";
import {useContext} from "react";

export function Profile() {
    const { level } = useContext(ChallengeContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lfeliperibeiro.png" alt="Foto profile" />
            <div>
                <strong>Felipe Ribeiro</strong>

                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}