import React from 'react';
import styles from '@/styles/TimeDisplay.module.css';
import { formatDate } from '@/utils/dateFormatter';

interface TimeDisplayProps {
  timestamp: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timestamp }) => {
  // Get formatted date parts
  const dateParts = formatDate(timestamp);

  return (
    <div className={styles.timeDisplay}>
      <div className={styles.dateSection}>
        <div className={styles.datePart}>
          <span className={styles.label}>YEAR</span>
          <span className={styles.value}>{dateParts.year}</span>
        </div>
        <div className={styles.separator}>-</div>
        <div className={styles.datePart}>
          <span className={styles.label}>MONTH</span>
          <span className={styles.value}>{dateParts.month}</span>
        </div>
        <div className={styles.separator}>-</div>
        <div className={styles.datePart}>
          <span className={styles.label}>DAY</span>
          <span className={styles.value}>{dateParts.day}</span>
        </div>
      </div>
      
      <div className={styles.timeSection}>
        <div className={styles.timePart}>
          <span className={styles.label}>HRS</span>
          <span className={styles.value}>{dateParts.hours}</span>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.timePart}>
          <span className={styles.label}>MIN</span>
          <span className={styles.value}>{dateParts.minutes}</span>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.timePart}>
          <span className={styles.label}>SEC</span>
          <span className={styles.value}>{dateParts.seconds}</span>
        </div>
      </div>
      
      <div className={styles.utcLabel}>UTC</div>
    </div>
  );
};

export default TimeDisplay;