import { catchAsync } from '../../utils/catchAsync.js';
import ExpressError from '../../utils/expressError.js';
import Movie from './model.js';

export const createMovie = catchAsync(async (req, res) => {
  const { name, imgUrl, summary } = req.body;
  const movie = await Movie.create({ name, img: imgUrl, summary });
  if (movie.err) throw new ExpressError(movie.err, movie.statusCode);
  res.status(200).json({
    status: 'success',
    data: movie,
  });
});

export const getMovie = catchAsync(async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findOne({ _id: id, isActive: true });
  if (!movie) throw new ExpressError('movie does not exist!', 404);
  res.status(200).json({
    status: 'success',
    data: movie,
  });
});

export const getAllMovies = catchAsync(async (req, res) => {
  const movies = await Movie.find({ isActive: true });
  if (!movies) throw new ExpressError('Uh Oh! nothing to show', 404);
  res.status(200).json({
    status: 'success',
    data: movies,
  });
});

export const updateMovie = catchAsync(async (req, res) => {
  const { id } = req.params;

  // Check movie exists
  const checkMovie = await Movie.findById(id);
  if (!checkMovie) throw new ExpressError('movie does not exist!', 404);
  // update movie
  const movie = await Movie.updateOne({ _id: id, isActive: 1 }, req.body, {
    new: true,
  });
  res.status(200).json({
    status: 'success',
    data: movie,
  });
});

export const deleteMovie = catchAsync(async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findByIdAndDelete(id);
  if (!movie) throw new ExpressError('movie does not exist!', 404);
  res.status(200).json({
    status: 'success movie deleted',
    data: movie,
  });
});
