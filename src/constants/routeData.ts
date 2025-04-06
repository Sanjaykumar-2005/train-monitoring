import { TrainRoute } from '@/types';

export const TRAIN_ROUTE: TrainRoute = {
  routeId: "TR001",
  routeName: "Chennai Express",
  totalDistance: 350,
  stations: [
    {
      name: "Chennai Central",
      distance: 0,
      arrivalTime: "06:00",
      departureTime: "06:15"
    },
    {
      name: "Arakkonam Junction",
      distance: 69,
      arrivalTime: "07:20",
      departureTime: "07:25"
    },
    {
      name: "Katpadi Junction",
      distance: 129,
      arrivalTime: "08:45",
      departureTime: "08:50"
    },
    {
      name: "Salem Junction",
      distance: 201,
      arrivalTime: "10:30",
      departureTime: "10:40"
    },
    {
      name: "Erode Junction",
      distance: 270,
      arrivalTime: "12:00",
      departureTime: "12:10"
    },
    {
      name: "Coimbatore Junction",
      distance: 350,
      arrivalTime: "13:30",
      departureTime: "13:45"
    }
  ]
};