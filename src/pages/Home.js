import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Banner from '../components/Banner';
import { movieAction } from '../redux/action/movieAction';

const Home = () => {

  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <Banner /> */}
      {popularMovies && <Banner movie={popularMovies.results[0]} />}
    </>
  );
};

export default Home;