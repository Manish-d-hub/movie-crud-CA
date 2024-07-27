import { Schema } from 'mongoose';
import db from '../../connection/dbmaster.js';

const movieSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name.'],
    },
    img: {
      type: String,
      required: [true, 'Please provide an image.'],
    },
    summary: {
      type: String,
      required: [true, 'Please provide summary.'],
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Movie = db.model('movie', movieSchema);
export default Movie;
