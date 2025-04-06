import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';

const ObstacleDistance = () => {
  const [distance, setDistance] = useState("...");

  useEffect(() => {
    const socket = new WebSocket("ws://172.16.44.104:81");

    socket.onmessage = (event) => {
      setDistance(event.data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      setDistance("Error");
    };

    socket.onclose = () => {
      setDistance("Disconnected");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Ultrasonic Distance</h2>
      <p className={styles.value}>{distance} cm</p>
    </div>
  );
};

export default ObstacleDistance;