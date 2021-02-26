import { createContext, ReactNode, useState, useEffect } from 'react';

import challenges from '../../challenges.json';

interface ActiveChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}


interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number; 
  activeChallenge: ActiveChallenge;
  levelUp: () => void;
  startNewChallenge: () => void; 
  completeChallenge: () => void;
  resetChallenge: () => void; 
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level+1)*4, 2);

  useEffect(()=>{
    Notification.requestPermission();
  },[])


  function levelUp(){
    setLevel(level + 1);
  }
  
  function startNewChallenge(){
    const randonChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randonChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play()
    if (Notification.permission === 'granted'){
      console.log('cu')
      new Notification('Novo Desafio! 🤠',{
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }

  function completeChallenge(){
    if (!activeChallenge) return;
    const { amount } = activeChallenge; 
    let finalExperience = amount + currentExperience;

    if (finalExperience >= experienceToNextLevel){
      levelUp();
      finalExperience = finalExperience - experienceToNextLevel;
    }
    
    setCurrentExperience(finalExperience); 
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);

  }



  return (
    <ChallengesContext.Provider value={{
     level,
     currentExperience,
     experienceToNextLevel,
     challengesCompleted, 
     activeChallenge,
     levelUp,
     startNewChallenge,
     completeChallenge,
     resetChallenge,
     }}>
      {children}
    </ChallengesContext.Provider>
  );
}