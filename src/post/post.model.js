import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: false
  }
});

export default model('Post', postSchema);