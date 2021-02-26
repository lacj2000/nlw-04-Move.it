import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';

import { CountdownContext } from '../contexts/CountdownContext';




export function Countdown() {
  const { minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCountdown, 
    startCountdown 
  } =  useContext(CountdownContext);
  
  const [ minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [ secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
                {/* <img src='icons/x.svg' /> */}
            </button>
            :
            <button onClick={startCountdown} className={styles.countdownButton}>
              Iníciar um Ciclo
              {/* <img src='icons/play-fill.svg' /> */}
            </button>
          }
        </>
      )}
      
      
    </div>
  );
}
