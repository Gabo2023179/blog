import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: false }
});

export default model('Comment', commentSchema);
