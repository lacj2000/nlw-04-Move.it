import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile(){
  const { level }  = useContext(ChallengesContext);
  
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/lacj2000.png' alt='Luiz Júnior'/>
      <div>
        <strong>Luiz Júnior</strong>
        <p>
          <img src='icons/level.svg' alt='level'/>
          
          level {level}
        </p>
      </div>
    </div>
  );
}