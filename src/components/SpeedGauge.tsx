import styles from '@/styles/SpeedGauge.module.css';

interface SpeedGaugeProps {
  speed: number;
  speedLimit: number;
}

const SpeedGauge: React.FC<SpeedGaugeProps> = ({ speed, speedLimit }) => {
  return (
    <div className={styles.card}>
      <h2>Speed Monitor</h2>
      <div className={styles.speedometer}>
        <div className={styles.speedValue}>
          {speed} km/h
        </div>
        {speed > speedLimit && (
          <div className={styles.warning}>
            ⚠️ OVERSPEED WARNING!
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeedGauge;