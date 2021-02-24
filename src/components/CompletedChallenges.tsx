import styles from '../styles/components/CompletedChallenges.module.css';
import {ChallengeContext} from "../contexts/ChallengesContext";
import {useContext} from "react";

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengeContext)
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}