
import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const startTime = 3;//25 * 60;
  const [time, setTime] = useState(startTime);
  const [isActive, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60; 
  
  const [ minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [ secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown(){
    setActive(true);
  }  

  function resetCountdown(){
    setActive(false);
    clearTimeout(countdownTimeout);
    setTime(startTime);
  } 

  useEffect(()=>{
    if(isActive && time > 0){
      countdownTimeout = setTimeout(()=>{
        setTime(time - 1);
      },1000)
    }else if (isActive && time === 0){
      setHasFinished(true)
      setActive(false)
    }
  },[isActive, time]);



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
        <button disabled className={styles.countdownButton}>
          Ciclo Encerrado 
          <img src='icons/check-circle-fill.svg' />
        </button>
      ):(
        <>
          {isActive?
            <button onClick={resetCountdown} className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
              Abandonar Ciclo
                <img src='icons/x.svg' />
            </button>
            :
            <button onClick={startCountdown} className={styles.countdownButton}>
              Iníciar um Ciclo
              <img src='icons/play-fill.svg' />
            </button>
          }
        </>
      )}
      
      
    </div>
  );
}
