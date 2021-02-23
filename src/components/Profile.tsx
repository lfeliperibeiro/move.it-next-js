import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lfeliperibeiro.png" alt="Foto profile" />
            <div>
                <strong>Felipe Ribeiro</strong>

                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}