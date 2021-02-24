import {createContext, ReactNode, useState} from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye',
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    activeChallenge: Challenge,
    resetChallenge: () => void,
    experienceToNextLevel: number,
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesComleted] = useState(0);

    const experienceToNextLevel = Math.pow((level + 1 ) * 4, 2)

    function levelUp() {
        setLevel(level + 1);
    }

    const [activeChallenge, setActiveChallenge] = useState(null)

    function startNewChallenge() {
        const randowChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randowChallengeIndex];

        setActiveChallenge(challenge)
    }

    function resetChallenge () {
        setActiveChallenge(null);
    }

    return (
        <ChallengeContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
        }}>
            { children }
        </ChallengeContext.Provider>
    )
}