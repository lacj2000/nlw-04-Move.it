import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import Head from 'next/head';

import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar/>

      <section>
        {/** left */}
        <div>
          <Profile/>
          <CompleteChallenges/>
          <Countdown/>
        </div>
        {/** rigth */}
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>
    )
}
