import { useState, useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';


export function ChallengeBox(){
  const { activeChallenge, resetChallenge }  = useContext(ChallengesContext);
  
  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge? 
        (<div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt='' />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button 
              onClick={resetChallenge}
              className={styles.challengeFailedButton}
              type='button' 
              >
              Falhei
            </button>
            <button 
              className={styles.challengeSucceededButton}
              type='button'
              >
              Completei
            </button>
          </footer>
        </div>
        ):
        (<div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um novo desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up'/>
            Avance de level completando desafios
          </p>
        </div>
      ) }
    </div>);
}