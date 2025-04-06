export interface TrainData {
    speed: number;
    distanceCovered: number;
    signal: 'RED' | 'YELLOW' | 'GREEN';
    timestamp: string;
    routeId: string;
  }
  
  export interface Station {
    name: string;
    distance: number;
    arrivalTime: string;
    departureTime: string;
  }
  
  export interface TrainRoute {
    routeId: string;
    routeName: string;
    stations: Station[];
    totalDistance: number;
  }