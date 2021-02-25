import styles from '../styles/components/Profile.module.css';


interface perfil {

}

export function Profile(){
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/lacj2000.png' alt='Luiz Júnior'/>
      <div>
        <strong>Luiz Júnior</strong>
        <p>
          <img src='icons/level.svg' alt='level'/>
          
          level 2
        </p>
      </div>
    </div>
  );
}