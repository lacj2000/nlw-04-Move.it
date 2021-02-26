import { useContext, ReactNode, useState, useEffect, createContext } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData{
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;

  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownPrividerProps {
  children: ReactNode;
}


export const CountdownContext = createContext({} as CountdownContextData)


let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownPrividerProps){
  const { startNewChallenge }  = useContext(ChallengesContext);
  
  const startTime = 3;//25 * 60;
  
  const [time, setTime] = useState(startTime);
  const [isActive, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60; 
  
  
  function startCountdown(){
    setActive(true);
  }  

  function resetCountdown(){
    setActive(false);
    clearTimeout(countdownTimeout);
    setTime(startTime);
    setHasFinished(false);
  } 

  useEffect(()=>{
    if(isActive && time > 0){
      countdownTimeout = setTimeout(()=>{
        setTime(time - 1);
      },1000)
    }else if (isActive && time === 0){
      setHasFinished(true);
      setActive(false);
      startNewChallenge();
    }
  },[isActive, time]);


  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
    }}>
      {children}
    </CountdownContext.Provider>
  );
}