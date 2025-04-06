import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';

const ObstacleDistance = () => {
  const [distance, setDistance] = useState("...");
  const [trainStatus, setTrainStatus] = useState("Running");

  useEffect(() => {
    const socket = new WebSocket("ws://172.16.44.104:81");

    socket.onmessage = (event) => {
      const value = parseFloat(event.data);
      setDistance(event.data);
      
      if (value < 15) {
        setTrainStatus("Stopped: Obstacle Detected");
      } else {
        setTrainStatus("Running");
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      setDistance("Error");
      setTrainStatus("Error");
    };

    socket.onclose = () => {
      setDistance("Disconnected");
      setTrainStatus("System Offline");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className={`${styles.card} ${parseFloat(distance) < 15 ? styles.warning : ''}`}>
      <h2 className={styles.title}>Ultrasonic Distance</h2>
      <p className={styles.value}>{distance} cm</p>
      <p className={`${styles.status} ${parseFloat(distance) < 15 ? styles.statusWarning : ''}`}>
        Train Status: {trainStatus}
      </p>
    </div>
  );
};

export default ObstacleDistance;