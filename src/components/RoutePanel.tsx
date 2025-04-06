import { TRAIN_ROUTE } from '@/constants/routeData';
import styles from '@/styles/RoutePanel.module.css';

interface RoutePanelProps {
  currentDistance: number;
}

const RoutePanel: React.FC<RoutePanelProps> = ({ currentDistance }) => {
  const getCurrentStation = () => {
    let currentStation = TRAIN_ROUTE.stations[0];
    
    for (let i = 1; i < TRAIN_ROUTE.stations.length; i++) {
      if (currentDistance < TRAIN_ROUTE.stations[i].distance) {
        return {
          current: currentStation,
          next: TRAIN_ROUTE.stations[i],
          remainingDistance: TRAIN_ROUTE.stations[i].distance - currentDistance
        };
      }
      currentStation = TRAIN_ROUTE.stations[i];
    }
    
    return {
      current: TRAIN_ROUTE.stations[TRAIN_ROUTE.stations.length - 1],
      next: null,
      remainingDistance: 0
    };
  };

  const { current, next, remainingDistance } = getCurrentStation();




  return (
    <div className={styles.routePanelFullWidth}>
      <div className={styles.routeInfo}>
        <h2>Route Information</h2>
        {/* <div className={styles.routeHeader}>
          <h3>{TRAIN_ROUTE.routeName}</h3>
          <p>Route ID: {TRAIN_ROUTE.routeId}</p>
        </div>
        
        <div className={styles.currentStatus}>
          <h4>Current Status:</h4>
          <p>Current Station: {current.name}</p>
          {next ? (
            <>
              <p>Next Station: {next.name}</p>
              <p>Distance to Next Station: {remainingDistance.toFixed(1)} km</p>
              <p>Expected Arrival: {next.arrivalTime}</p>
            </>
          ) : (
            <p>Terminal Station Reached</p>
          )}
        </div> */}
      </div>

      <div className={styles.routeTimelineWrapper}>
        <div className={styles.routeTimeline}>
          {TRAIN_ROUTE.stations.map((station, index) => (
            <div 
              key={station.name} 
              className={`${styles.stationPoint} ${
                station.distance <= currentDistance ? styles.passed : ''
              } ${current.name === station.name ? styles.current : ''}`}
            >
              <div className={styles.stationDot}></div>
              <div className={styles.stationInfo}>
                <p className={styles.stationName}>{station.name}</p>
                <p className={styles.stationTime}>
                  {station.arrivalTime} - {station.departureTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoutePanel;