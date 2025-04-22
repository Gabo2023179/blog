import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    default: ''
  }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: false }
});

export default model('Course', courseSchema);