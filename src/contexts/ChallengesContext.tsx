import {createContext, ReactNode, useEffect, useState} from 'react'

import challenges from '../../challenges.json'



interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

interface ChallegenContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelup: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    CompleteChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallegenContextData)

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [ activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])
  
  function levelup() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randowChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randowChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
        new Notification('Novo Desafio ✨', {
            body: `Valendo ${challenge.amount}xp`
        })
    }
  }

  function resetChallenge() {
      setActiveChallenge(null)
  }

  function CompleteChallenge() {
    if (!activeChallenge){ return;}
    
    const { amount } = activeChallenge
    
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
        finalExperience = finalExperience - experienceToNextLevel;
        levelup()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)

}

    return (
        <ChallengesContext.Provider 
        value={{
            level, 
            currentExperience, 
            challengesCompleted, 
            levelup, 
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            CompleteChallenge,
            }}
        >
        {children}
        </ChallengesContext.Provider>
    )
}


