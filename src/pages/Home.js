import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import { movieAction } from '../redux/action/movieAction';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <ClipLoader color='#fffff' loading={loading} size={150} />;
  }

  return (
    <>
      <Banner movie={popularMovies.results[0]} />
      <h1>popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top Rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} />

    </>
  );
};

export default Home;