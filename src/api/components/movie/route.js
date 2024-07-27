import { Router } from 'express';
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovie,
  updateMovie,
} from './controller.js';

const router = Router();

router.post('/createMovie', createMovie);
router.get('/getMovie/:id', getMovie);
router.get('/getMovies', getAllMovies);
router.put('/updateMovie/:id', updateMovie);
router.delete('/deleteMovie/:id', deleteMovie);

export default router;
