import React from 'react';
import styles from '@/styles/SignalStatus.module.css';

interface SignalStatusProps {
  signal: 'RED' | 'YELLOW' | 'GREEN' | null;
}

const SignalStatus: React.FC<SignalStatusProps> = ({ signal }) => {
  return (
    <div className={styles.card}>
      <h2>Signal Status</h2>
      <div className={styles.signalContainer}>
        <div className={styles.signalPost}>
          <div className={styles.signalHead}>
            {/* Red Light */}
            <div className={`${styles.signalLight} ${styles.red} ${signal === 'RED' ? styles.active : ''}`}>
              <div className={styles.innerLight}></div>
              <div className={styles.glowEffect}></div>
            </div>
            {/* Yellow Light */}
            <div className={`${styles.signalLight} ${styles.yellow} ${signal === 'YELLOW' ? styles.active : ''}`}>
              <div className={styles.innerLight}></div>
              <div className={styles.glowEffect}></div>
            </div>
            {/* Green Light */}
            <div className={`${styles.signalLight} ${styles.green} ${signal === 'GREEN' ? styles.active : ''}`}>
              <div className={styles.innerLight}></div>
              <div className={styles.glowEffect}></div>
            </div>
          </div>
          <div className={styles.postBase}></div>
        </div>
        <div className={styles.signalInfo}>
          <div className={styles.status}>
            Current Signal:
            <span className={`${styles.statusText} ${styles[signal?.toLowerCase() || 'none']}`}>
              {signal || 'NO SIGNAL'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalStatus;