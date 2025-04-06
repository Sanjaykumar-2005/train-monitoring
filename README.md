# Train Monitoring System

A real-time dashboard for monitoring train operations including speed, signals, obstacle detection, and route tracking.

## Features

- **Speed Monitoring**: Real-time speed gauge with speed limit indicators
- **Signal Status**: Live tracking of railway signals
- **Obstacle Detection**: Real-time distance measurement using ultrasonic sensors
- **Route Tracking**: Visual timeline of stations with arrival/departure times
- **Distance Tracking**: Current distance covered and total route distance
- **Real-time Updates**: WebSocket integration for live data updates

## Technologies Used

- Next.js
- React
- TypeScript
- WebSocket
- CSS Modules

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- ESP8266 or similar microcontroller for sensor data

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sanjaykumar-2005/train-monitoring.git
cd train-monitoring
```

2. Install dependencies:
```bash
npm install
```

3. Configure the WebSocket connection:
   - Update the WebSocket URL in `src/components/ObstacleDetection.tsx`
   - Default URL is `ws://172.16.44.104:81`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
train-monitoring/
├── src/
│   ├── components/
│   │   ├── SpeedGauge.tsx
│   │   ├── SignalStatus.tsx
│   │   ├── RoutePanel.tsx
│   │   ├── ObstacleDetection.tsx
│   │   └── TimeDisplay.tsx
│   ├── constants/
│   │   ├── routeData.ts
│   │   └── trainData.ts
│   ├── styles/
│   │   └── Home.module.css
│   ├── types/
│   │   └── index.ts
│   └── pages/
│       └── index.tsx
└── public/
```

## Hardware Setup

- ESP8266 microcontroller
- Ultrasonic sensor (HC-SR04)
- Power supply
- WiFi connection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
