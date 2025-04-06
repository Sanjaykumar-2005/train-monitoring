import mongoose from 'mongoose';

const trainSchema = new mongoose.Schema({
  speed: {
    type: Number,
    required: true,
  },
  distanceCovered: {
    type: Number,
    required: true,
  },
  signal: {
    type: String,
    enum: ['RED', 'YELLOW', 'GREEN'],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  routeId: {
    type: String,
    required: true,
    default: 'TR001'
  }
});

export default mongoose.models.Train || mongoose.model('Train', trainSchema);