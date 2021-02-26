import { useContext } from 'react';
import styles from '../styles/components/CompleteChallenges.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

  
export function CompleteChallenges(){
  const { challengesCompleted }  = useContext(ChallengesContext);
  
  return(
    <div className={styles.completeChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{ challengesCompleted }</span>
    </div>
  );
}