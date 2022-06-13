import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { movieAction } from '../redux/action/movieAction';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>Home</div>
  );
};

export default Home;