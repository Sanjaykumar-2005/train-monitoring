import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { TrainData } from '@/types';
import SpeedGauge from '@/components/SpeedGauge';
import SignalStatus from '@/components/SignalStatus';
import RoutePanel from '@/components/RoutePanel';
import TimeDisplay from '@/components/TimeDisplay';
import { TRAIN_ROUTE } from '@/constants/routeData';
import { staticTrainData } from '@/constants/trainData';
import ObstacleDistance from '@/components/ObstracleDetection';

const SPEED_LIMIT = 120; // Speed limit in km/h

export default function Home() {
  const [trainData] = useState<TrainData>(staticTrainData);

  return (
    <div className={styles.container}>
      <Head>
        <title>Train Monitoring System</title>
        <meta name="description" content="Train monitoring dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Train Monitoring System</h1>

        <div className={styles.grid}>
          <SpeedGauge 
            speed={trainData.speed} 
            speedLimit={SPEED_LIMIT} 
          />

          <div className={styles.card}>
            <h2>Distance Covered</h2>
            <p>{trainData.distanceCovered} km</p>
            <p className={styles.totalDistance}>
              Total Route Distance: {TRAIN_ROUTE.totalDistance} km
            </p>
          </div>

          <SignalStatus signal={trainData.signal} />

          <ObstacleDistance /> 

          {/* <div className={styles.card}>
            <h2>Last Updated</h2>
            <TimeDisplay timestamp={trainData.timestamp} />
          </div> */}

          <RoutePanel currentDistance={trainData.distanceCovered} />
        </div>
      </main>
    </div>
  );
}